import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import UrlForm from './form'
import UrlReturn from './return'
import InfoTag from './info-tag'

class UrlFormContainer extends Component {
  render() {
    const { url, actions: { submitUrlForm } } = this.props
    return (
      <div>
        <UrlForm submitUrlForm={submitUrlForm} />
        <UrlReturn url={url} />
        <InfoTag />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    url: state.url
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UrlFormContainer)
