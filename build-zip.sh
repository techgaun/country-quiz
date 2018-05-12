#!/bin/bash

ZIP_FILE="country-quiz.zip"

rm -rf "${ZIP_FILE}"
npm prune --production
zip -q -x "*.git*" -x "test/*" -x "*.png" -x "package*.json" -x "tags" -x "*.sh" -r "${ZIP_FILE}" .
