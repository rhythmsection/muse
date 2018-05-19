import fire from '../fire'
import moment from 'moment'
import request from 'request'
import phish from '../phish'

export const submitUrlForm = (urlData) => async (dispatch) => {
  let url

  /*

  Hi morning kristen. here is what you have left to do:

  1. make sure that your request connects to your cloud function. ostensibly the code should be there but it might not run prop.
  2. Is this faster than the db in house? (if not i will be sad)
  3. Fix results div (copy keyboard maybe?)
  4. Fix stylin'
  5. tests man
  6. documentation and cleaning yo

  */

  // await fire.database().ref('phish').orderByChild('url').equalTo(urlData.longUrl).on("value", snap => {
  //   const phish = snap.val()
  //   const created_at = moment().format()
  //   if (phish !== null) {
  //     url = {
  //       longUrl: urlData.longUrl,
  //       alias: urlData.alias,
  //       created_at,
  //       suspect: true
  //     }
  //   } else {
  //     url = {
  //       longUrl: urlData.longUrl,
  //       alias: urlData.alias,
  //       created_at,
  //       suspect: false
  //     }
  //   }
  // })

  // const fishin = await axios({
  //   method: 'POST',
  //   url: 'http://data.phishtank.com/data/d3efe617a6104ac376080d1b697fd20d070c63565b09eeca27e444f0a9ae7130/online-valid.json.gz',
  //   data: {
  //     url: urlData.longUrl,
  //     app_key: 'd3efe617a6104ac376080d1b697fd20d070c63565b09eeca27e444f0a9ae7130'
  //   }
  // })

  request.post({
  url: 'https://us-central1-url-muse.cloudfunctions.net/api/check-url',
  json: true,
  form: {
    url: urlData.longUrl,
    app_key: phish
  }},
  function(error, response, body){
  console.log('MY DUDE', body)
})

  fire.database().ref('urls').push(url)

  return dispatch({
    type: 'ADD_URL',
    url
  })
}
