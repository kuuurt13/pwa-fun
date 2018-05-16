import actions from '../actions'

const initialState = {
  results: []
}

function search(state = initialState, { type, payload }) {
  switch (type) {
    case actions.SEARCH_IMAGES_SUCCESS:
      return {
        ...state,
        results: payload.data || []
      }
    case actions.CLEAR_SEARCH_IMAGES:
      return {
        ...state,
        results: []
      }
    default:
      return state
  }

}

export default search
