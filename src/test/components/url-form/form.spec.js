import assert from 'assert'
import { mount } from 'enzyme'
import React from 'react'

import UrlForm from '../../../components/url-form/form'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('URL Form', () => {
  const render = () => {
    const withDefaults = {
      submitUrlForm: () => {}
    }

    return mount(<UrlForm {...withDefaults} />)
  }

  it('renders w/ defaults', () => {
    const wrapper = render()

    assert(wrapper.find('.url-form').exists())
    assert.equal(wrapper.find('input').length, 2)
    assert.equal(wrapper.find('button').length, 1)
  })
})
