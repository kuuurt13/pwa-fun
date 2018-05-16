import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../services/api'
import actions from '../actions'

function* searchImages({ payload }) {
   try {
    const res = yield call(api.searchImages, payload.term)

    yield put({ type: actions.SEARCH_IMAGES_SUCCESS, payload: res })
   } catch (error) {
    yield put({ type: actions.SEARCH_IMAGES_FAIL, payload: { error } })
   }
}

function* searchSaga() {
  yield takeLatest(actions.SEARCH_IMAGES, searchImages)
}

export default searchSaga
