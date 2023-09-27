const fs = require('fs')
const path = require('path')
const webRoot = path.resolve(__dirname, '..')

require('dotenv').config({ path: path.join(webRoot, '.env') })
const cssFilePath = path.join(webRoot, 'app/css/variables.css')

function buildCSSString(variables, prefix) {
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

      console.log('CSS file updated successfully.')
    })
  })
}

async function getThemeVariables() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/theme-variables`)

  const { colors = {}, layout = {} } = await data.json()

  injectvariables({
    colors,
    layout,
  })

  return {}
}

getThemeVariables()
