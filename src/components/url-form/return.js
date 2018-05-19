/*

return value for URL (as a usable link) / copy pasteable?
BBS formatting as well as html formatting?

*/

import React from 'react'
import PropTypes from 'prop-types'

const UrlReturn = ({url}) => {
  const shortUrl = `https://url-muse.firebaseapp.com/${url.alias}`
  return !url.suspect && url.alias
  ? (
    <div className='url-return'>
       <span><label>SHORTENED URL: </label> <a href={url.longUrl}>{shortUrl}</a></span>
       <label>HTML LINK: </label>
       <label>BBS LINK: </label>
    </div>
  )
  : url.suspect
    ? (
      <div className='url-return warning'>
        The URL you submitted, <strong>{url.longUrl}</strong> is a known phishing website. Keep the web clean. Use MUSE for non-destructive purposes only. Thanks!
      </div>
    )
    : null

}

UrlReturn.propTypes = {
  url: PropTypes.object.isRequired
}

export default UrlReturn
