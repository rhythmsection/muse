const initialState = {
  originalUrl: null,
  alias: null,
  valid: false,
  done: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_URL':
      return {
        ...state,
        ...action.url,
        done: true
      }
    default:
      return state
  }
}
