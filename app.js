const express = require('express')
const { Nuxt } = require('nuxt')
const app = express()
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = false

const nuxt = new Nuxt(config)
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(nuxt.render)

module.exports = app
