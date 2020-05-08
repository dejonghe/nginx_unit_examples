#!/usr/bin/env node

if (process.env.SOME_VAR) {
  const {
    createServer,
    IncomingMessage,
    ServerResponse,
  } = require('unit-http')
  
  require('http').ServerResponse = ServerResponse
  require('http').IncomingMessage = IncomingMessage
}
const port = 3000;

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.set('X-Unit-Type', 'Absolute')
  res.send(process.env)
})

if (process.env.SOME_VAR) {
  createServer(app).listen()
} else {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
