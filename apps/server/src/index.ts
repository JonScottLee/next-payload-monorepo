import dotenv from 'dotenv'
import { next, nextBuild } from '@org/web'
import express from 'express'
import { getPayloadClient } from '@org/cms'
import path from 'path'
import { fork } from 'child_process'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const app = express()
const NEXT_DIR = path.join(process.cwd(), '../web')
const PORT = parseInt(process.env.PORT || '3000', 10)
const DEV = process.env.NODE_ENV !== 'production'
const HOSTNAME = process.env.HOSTNAME ?? '127.0.0.1'

function runScript(scriptPath: string, callback: (err: Error | null) => void) {
  // keep track of whether callback has been invoked to prevent multiple invocations
  let invoked = false

  const process = fork(scriptPath)

  // listen for errors as they may prevent the exit event from firing
  process.on('error', function (err) {
    if (invoked) return

    invoked = true

    callback(err)
  })
}

const start = async (): Promise<void> => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (newPayload) => {
        newPayload.logger.info(`Payload Admin URL: ${newPayload.getAdminURL()}`)
      },
    },
    seed: process.env.PAYLOAD_PUBLIC_SEED === 'true',
  })

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '..'))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dir: NEXT_DIR,
    dev: DEV,
    hostname: HOSTNAME,
    port: PORT,
    customServer: true,
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use('/write-css-variables', (req, res) => {
    const webRoot = path.join(process.cwd(), '../web')
    const scriptPath = path.join(webRoot, 'scripts', 'write-css-variables.js')

    runScript(scriptPath, function (err) {
      if (err) throw err

      console.log('finished running write-css-variables.js')
    })

    res.status(200).end()
  })

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
