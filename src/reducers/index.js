// this file is overkill for now, but provides extensibility

import url from './url.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  url
})

export default rootReducer
