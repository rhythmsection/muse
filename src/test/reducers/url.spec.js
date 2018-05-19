import assert from 'assert'
import sinon from 'sinon'

import reducer from '../../reducers/url'

describe('Reducers: URL', () => {
  const initialState = {
    longUrl: '',
    alias: '',
    suspect: false,
    created_at: null
  }

  const mockUrl = {
    longUrl: 'aaa',
    alias: 'aaa'
  }

  it('should return the initial state on @@INIT', () => {
    assert.deepEqual(
      reducer(undefined, { type: '@@INIT' }),
      initialState
    )
  })

  it('should set URL values on ADD_URL without adding to DB', () => {
    const action = {
      type: 'ADD_URL',
      url: mockUrl
    }

    const mockReturn = {
      longUrl: 'aaa',
      alias: 'aaa',
      suspect: false,
      created_at: null
    }

    assert.deepEqual(
      reducer(initialState, action),
      mockReturn
    )
  })
})
