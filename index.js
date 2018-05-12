'use strict'

const Alexa = require('alexa-sdk')
const consts = require('./consts')

const handlers = {
  'LaunchRequest': () => {
    this.response.speak(consts.messages['launch'])
    this.emit(':responseReady')
  },
  'AMAZON.StopIntent': () => {
    this.response.speak(consts.messages['stop'])
    this.emit(':responseReady')
  },
  'AMAZON.HelpIntent': () => {
    help_lines = consts.messages['help']
    help_lines.forEach(help => {
      this.response.speak(help)
    })
    this.emit(':responseReady')
  },
  'AMAZON.CancelIntent': () => {
    this.response.speak(consts.messages['stop'])
    this.emit(':responseReady')
  },
  'Unhandled': () => {
    this.emit('AMAZON.HelpIntent')
  }
}

exports.handler = (event, context, _callback) => {
  const alexa = Alexa.handler(event, context)
  alexa.registerHandlers(handlers)
  alexa.execute()
}
