/*

Should include:

A warning/safeguard message if it does not pass the phishing test, else

return value for URL (as a usable link) / copy pasteable?
BBS formatting as well as html formatting?

*/

import React from 'react'
import PropTypes from 'prop-types'

const UrlReturn = ({url}) => {
  const valid = true
  // check for phishing :<

  return valid
  ? (
    <div className='url-return'>
       <label>SHORTENED URL: </label>
       <label>HTML LINK: </label>
       <label>BBS LINK: </label>
    </div>
  )
  : (
    <div className='url-return'>
      WARNING YO DONT GIVVE ME YOUR DUMB PHISHING SHIT
    </div>
  )
}

UrlReturn.propTypes = {
  url: PropTypes.object.isRequired
}

export default UrlReturn
