import actions from '../actions'

const initialState = {
  name: null,
}

function user(state = initialState, { type, payload }) {
  switch (type) {
    case actions.USER_SIGN_IN:
      return {
        ...state,
        name: payload.name,
      }
    default:
      return state
  }
}

export default user
