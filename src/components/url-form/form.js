import React, {Component} from 'react'
import shortid from 'shortid'
import validUrl from 'valid-url'
import { BeatLoader } from 'react-spinners'

import './url-form.css'

import fire from '../../fire'

class UrlForm extends Component {
  state = {
    isUnique: true,
    isValid: true,
    isLoading: false
  }

  onSubmitUrlClick = async () => {
    const longUrl = document.getElementById('longUrl')
    const alias = document.getElementById('alias')
    const aliasValue = alias.value === "" ? shortid.generate() : alias.value

    this.setState({ isValid: validUrl.isWebUri(longUrl.value) })

    await fire.database().ref('urls').orderByChild('alias').equalTo(aliasValue).once("value", snap => {
      const urlData = snap.val()
      if (urlData !== null) {
        this.setState({isUnique: false})
      }
    })

    if (this.state.isValid && this.state.isUnique) {
      this.setState({isLoading: true})
      await this.props.submitUrlForm({
        longUrl: longUrl.value,
        alias: aliasValue
      })

      this.setState({isLoading: false})

      longUrl.value = ""
      alias.value = ""

      longUrl.focus()
    }
  }

  componentDidMount() {
    document.getElementById('longUrl').focus()
  }

  render() {
    return (
      <div>
        <div className='url-form'>
          <h2>MAGICAL URL SHORTENING EXPERIENCE</h2>
          {!this.state.isValid ? <span className='warning'>URIs must start with <i>http(s)://</i></span> : null}
          <input id="longUrl" className='url-form-input' type="text" placeholder="Paste URL to Shorten" />
          {!this.state.isUnique ? <span className='warning'>This alias is not available.</span> : null}
          <input id="alias" className='url-form-input' type="text" placeholder="Custom Alias eg. domain.com/<alias>" />
          <button className='url-form-button' onClick={this.onSubmitUrlClick}>SHORTEN</button>
        </div>
        { this.state.isLoading
          ? <div className='url-return'>
              <BeatLoader
                color={'#123abc'}
                loading={this.state.isLoading}
              />
            </div>
          : null
        }
      </div>
    )
  }
}

export default UrlForm
