import { take, put, call, takeLatest, select } from 'redux-saga/effects'
import { subscribe, add } from '../services/firebase'
import actions from '../actions'

function* emitImages({ payload }) {
  const updateChannel = subscribe()

  while (true) {
    const item = yield take(updateChannel)

    if (item) {
      yield put({ type: actions.RECEIVE_IMAGES, payload: item })
    }
  }
}

function* addImage({ payload }) {
  const user = yield select(state => state.user)
  const posted = new Date().toISOString()

  yield call(add, {
    ...payload,
    post: {
      posted,
      user
    },
  })
}

function* searchSaga() {
  yield takeLatest(actions.SUBSCRIBE_TO_IMAGES, emitImages)
  yield takeLatest(actions.ADD_IMAGE, addImage)
}

export default searchSaga
