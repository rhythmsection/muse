/*
  Here is the actual API call to phishtank. There were a couple of different URLs listed to use on
  the developers' page, but I thought this way looked neater. This is also my 'server-side' code.
  I chose firebase because the server-side code necessary was slim.
*/

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const request = require('request-promise')
const cors = require('cors')({origin: true})

const app = express()

admin.initializeApp()
app.use(cors)

app.post('/check-url', (req, res) => {
  const { url, app_key } = req.body
  return request.post({
      url: 'https://checkurl.phishtank.com/checkurl/',
      json: true,
      form: {
        format: 'json',
        url,
        app_key
      }
    },
    function (error, response, body) {
      return res.status(200).send(body)
    })
  })


exports.api = functions.https.onRequest(app)
