import assert from 'assert'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { submitUrlForm } from '../../actions'

const mockData = {
      longUrl: 'aaa',
      alias: 'aaa',
      createdAt: null,
      suspect: false
    }

jest.mock('request', () => {
  return {
    post: () => ({
      data: mockData
    })
  }
})

const mockStore = configureStore([ thunk ])

describe('Actions: URL', () => {
  it('submitUrlForm handles a whole lot of business', async () => {
    const store = mockStore({})
    const expected = { data: mockData }

    assert.deepEqual(expected, await store.dispatch(submitUrlForm({longUrl: 'aaa', alias: 'aaa'})))
  })
})
