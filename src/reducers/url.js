const initialState = {
  longUrl: '',
  alias: '',
  valid: false,
  suspect: false,
  created_at: null,
  loaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_URL':
      return {
        ...state,
        ...action.url,
        loaded: true
      }
    default:
      return state
  }
}
