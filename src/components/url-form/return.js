/*

  CopyToClipboard is a cute react npm module, but a little clumsy. In a longer project, I would have loved
  to build this implementation myself with more extensibility.

  I also would like to add statistics for phishing links submitted. The database is prepped (stores this info),
  and could make an interesting visualization on larger usage. (e.g. what links/domains get submitted most often?)

*/

import React from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const UrlReturn = ({url}) => {
  const { alias, suspect, longUrl } = url
  const shortUrl = `https://url-muse.firebaseapp.com/${alias}`
  return !suspect && alias
  ? (
    <div className='url-return'>
      {shortUrl}
      <div className='copy-buttons'>
        <CopyToClipboard text={shortUrl}>
          <button className='url-form-button'>Copy Shortened URL</button>
        </CopyToClipboard>
        <CopyToClipboard text={`<a href="${shortUrl}">${shortUrl}</a>`}>
          <button className='url-form-button'>Copy HTML Link</button>
        </CopyToClipboard>
        <CopyToClipboard text={`[url="${shortUrl}"]${shortUrl}[/url]`}>
          <button className='url-form-button'>Copy BBS Link</button>
        </CopyToClipboard>
      </div>
    </div>
  )
  : suspect
    ? (
      <div className='url-return warning'>
        The URL you submitted, <strong>{longUrl}</strong> has pinged our phishing database and may be a malicious link.
        Keep the web clean. Use MUSE for non-destructive purposes only. Thanks!
      </div>
    )
    : null

}

export default UrlReturn
