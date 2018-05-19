import fire from '../fire'
import moment from 'moment'
import request from 'request'
import phish from '../phish'

export const submitUrlForm = (urlData) => async (dispatch) => {
  /*

  Hi morning kristen. here is what you have left to do:

  3. Fix results div (copy keyboard maybe?)
  4. Fix stylin'
  5. tests man
  6. documentation and cleaning yo

  */

return request.post({
  url: 'https://us-central1-url-muse.cloudfunctions.net/api/check-url',
  json: true,
  form: {
    url: urlData.longUrl,
    app_key: phish
  }},
  function (error, response, body) {
    const url = {
      longUrl: urlData.longUrl,
      alias: urlData.alias,
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
