#!/bin/bash

rm -rf *.json
wget -q https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json
wget -q https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json
wget -q https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-currency-name.json
