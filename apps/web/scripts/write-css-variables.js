const fs = require('fs')
const path = require('path')
const webRoot = path.resolve(__dirname, '..')

require('dotenv').config({ path: path.join(webRoot, '.env') })

const cssFilePath = path.join(webRoot, 'app/css/variables.css')

function log(string) {
  console.log(`[write-css-variables.js] ${string}`)
}

function buildCSSString(variables, prefix) {
  log(`Building CSS variables (${prefix}) string...`)

  let string = ''

  for (const name in variables) {
    if (variables.hasOwnProperty(name)) {
      const value = variables[name]

      string += `\n\t${prefix}--${name}: ${value};`
    }
  }

  return string
}

function injectvariables({ colors, layout }) {
  log('Writing CSS variables string to file...')

  fs.readFile(cssFilePath, 'utf8', (err, cssData) => {
    if (err) {
      console.error('Error reading CSS file:', err)
      return
    }

    let cssString = ''

    cssString += buildCSSString(colors, '--global--color')
    cssString += buildCSSString(layout, '--global--layout')
    cssString = `:root {${cssString}\n}\n`

    // Write the updated CSS content back to the file
    fs.writeFile(cssFilePath, cssString, 'utf8', (err) => {
      if (err) {
        console.error('Error writing CSS file:', err)
        return
      }

      log(`CSS file ${cssFilePath} updated successfully.`)
    })
  })
}

// Jon: use path.join(process.cwd(), '../web') for pathing

async function getThemeVariables() {
  log('Getting theme variables...')

  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/theme-variables`)

  const { colors = {}, layout = {} } = await data.json()

  injectvariables({
    colors,
    layout,
  })

  return {}
}

getThemeVariables()
