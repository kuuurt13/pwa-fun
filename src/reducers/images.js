import actions from '../actions'

const initialState = {
  results: []
}

function images(state = initialState, { type, payload = [] }) {
  switch (type) {
    case actions.RECEIVE_IMAGES:
      return {
        ...state,
        results: payload
      }
    default:
      return state
  }
}

export default images
