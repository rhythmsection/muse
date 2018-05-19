/*

The react-router style equivalent of redirecting in an HTTP call to original URL
using matching on alias in my firebase database.

*/
import React from "react"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import fire from '../fire'

const DynamicRouter = () => {
  return (
    <Router>
      <Route
        path='/:alias'
        component={({match}) => {
          fire.database().ref('urls').orderByChild('alias').equalTo(match.params.alias).once('value', snap => {
            const urlData = snap.val()
            if (urlData !== null) {
              for (let item in urlData) {
                window.location = urlData[item].longUrl
              }
            } else {
              window.location = 'https://url-muse.firebaseapp.com/'
            }
            return null
          })
        }}
      />
    </Router>
  )
}

export default DynamicRouter
