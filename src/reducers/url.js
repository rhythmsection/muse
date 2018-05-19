/*

I do still store all phishing links. This is purposeful -- I think it's interesting data.
They are tagged 'suspect: true'.

*/

const initialState = {
  longUrl: '',
  alias: '',
  suspect: false,
  createdAt: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_URL':
      return {
        ...state,
        ...action.url
      }
    default:
      return state
  }
}
