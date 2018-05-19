'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const app = express();
const request = require('request-promise');
const cors = require('cors')({origin: true});

app.use(cors)

app.post('/check-url', (req, res) => {
  const url = req.body.url
  const app_key = req.body.app_key
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
