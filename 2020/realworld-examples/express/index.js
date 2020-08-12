#!/usr/bin/env node

const {
  createServer,
  IncomingMessage,
  ServerResponse,
} = require('unit-http')

require('http').ServerResponse = ServerResponse
require('http').IncomingMessage = IncomingMessage
const port = 3000;

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.set('X-Unit-Type', 'Absolute')
  res.send(process.env)
})

createServer(app).listen()
