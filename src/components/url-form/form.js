/*

Should include:
mandatory submission for url
optional submission for hash replacement
submit button

*/

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './url-form.css';

class UrlForm extends Component {
  constructor(props) {
    super(props)
  }

  onSubmitUrlClick = () => {
    const originalUrl = document.getElementById('originalUrl')
    const alias = document.getElementById('alias')

    // if optional value, do a check to see if it's in the DB if so,
    // submit error.

    this.props.submitUrlForm({
      originalUrl: originalUrl.value,
      alias: alias.value
    })

    originalUrl.value = ""
    alias.value = ""

    originalUrl.focus()
  }

  componentDidMount() {
    document.getElementById('originalUrl').focus()
  }

  render() {
    return (
      <div className='url-form'>
        <h2>MAGICAL URL SHORTENER</h2>
        <input id="originalUrl" className='url-form-input' type="text" placeholder="Paste URL to Shorten" />
        <input id="alias" className='url-form-input' type="text" placeholder="Optional Alias After the Domain" />
        <button className='url-form-button' onClick={this.onSubmitUrlClick}>SHORTEN</button>
      </div>
    )
  }
}

UrlForm.propTypes = {
  submitUrlForm: PropTypes.func.isRequired
}

export default UrlForm
