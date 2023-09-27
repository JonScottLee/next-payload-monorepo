const fs = require('fs')
const path = require('path')
const webRoot = path.resolve(__dirname, '..');

require('dotenv').config({ path: path.join(webRoot, '.env') })
const cssFilePath = path.join(webRoot, 'app/css/variables.css');

function buildCSSString(variables) {
  let string = `:root {`

  for (const name in variables) {
    if (variables.hasOwnProperty(name)) {
      const value = variables[name]

      string += `\n\t--global--color--${name}: ${value};`
    }
  }

  string += `\n}\n`

  return string
}

function injectvariables(variables) {
  fs.readFile(cssFilePath, 'utf8', (err, cssData) => {
    if (err) {
      console.error('Error reading CSS file:', err)
      return
    }

    const cssString = buildCSSString(variables)

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

  const { values } = await data.json()

  injectvariables(values)

  return {}
}

getThemeVariables()
