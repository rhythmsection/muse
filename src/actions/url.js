/*
  Here is where the POST request connecting to the phishtank API lives, as well as the submission of
  a new URL to the database. Because this entire app is essentially 'client-side', the actual
  express code lives as a cloud function in firebase. If you're looking for it in github,
  you can find it in /functions/index.js

*/

import fire from '../fire'
import moment from 'moment'
import request from 'request'
import phish from '../phish'

export const submitUrlForm = (urlData) => async (dispatch) => {
  const { longUrl, alias } = urlData

  return request.post({
    url: 'https://us-central1-url-muse.cloudfunctions.net/api/check-url',
    json: true,
    form: {
      url: longUrl,
      app_key: phish
    }},
    function (error, response, body) {
      const url = {
        longUrl: longUrl,
        alias,
        created_at: moment().format('MMMM Do YYYY, h:mm:ss a'),
        suspect: body.results.in_database
      }

      fire.database().ref('urls').push(url)

      return dispatch({
        type: 'ADD_URL',
        url
      })
    })
}
