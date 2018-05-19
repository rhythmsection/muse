import assert from 'assert'
import { mount } from 'enzyme'
import React from 'react'

import UrlReturn from '../../../components/url-form/return'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('URL Return', () => {

  it('renders w/ non-suspect link', () => {
    const url = {
      longUrl: 'http://www.itsgreat.com',
      alias: 'supergreat',
      suspect: false,
      createdAt: Date.now()
    }
    const render = (props) => {
      const withNonSuspect = {
        url,
        ...props
      }

      return mount(<UrlReturn {...withNonSuspect} />)
    }
    const wrapper = render()

    assert(wrapper.find('.url-return').exists())
    assert.equal(wrapper.find(CopyToClipboard).length, 3)
  })

  it('renders w/ suspect link', () => {
    const url = {
      longUrl: 'http://www.phishingscam.com',
      alias: 'notgreat',
      suspect: true,
      createdAt: Date.now()
    }
    const render = (props) => {
      const withSuspect = {
        url,
        ...props
      }

      return mount(<UrlReturn {...withSuspect} />)
    }
    const wrapper = render()

    assert(wrapper.find('.url-return').exists())
    assert.equal(wrapper.find(CopyToClipboard).length, 0)
  })
})
