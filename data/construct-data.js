#!/usr/bin/env node

const fs = require('fs')

const capitals = require('./country-by-capital-city.json')
const continents = require('./country-by-continent.json')
const currency = require('./country-by-currency-name.json')

const transformed_capitals = capitals.reduce((transformed, { country, city }) => {
  return Object.assign(transformed, { [country]: city })
}, {})

const transformed_continents = continents.reduce((transformed, { country, continent }) => {
  return Object.assign(transformed, { [country]: continent })
}, {})

const transformed_currency = currency.reduce((transformed, { country, currency_name }) => {
  return Object.assign(transformed, { [country]: currency_name })
}, {})

const writeJSON = (filename, data) => fs.writeFileSync(filename, JSON.stringify(data))

writeJSON('capitals.json', transformed_capitals)
writeJSON('continents.json', transformed_continents)
writeJSON('currencies.json', transformed_currency)
