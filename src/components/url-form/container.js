import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import UrlForm from './form';
import UrlReturn from './return';

class UrlFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: {}
    }
  }

  render() {
    const { url } = this.props

    return (
      <div>
        <UrlForm submitUrlForm={this.props.actions.submitUrlForm} />
        <UrlReturn url={url} />
      </div>
    )
  }
}

UrlFormContainer.propTypes = {
  url: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
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
