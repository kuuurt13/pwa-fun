import { all } from 'redux-saga/effects'
import searchSaga from './searchSaga'
import imageSaga from './imageSaga'

export default function *rootSaga () {
  yield all([
    searchSaga(),
    imageSaga()
  ])
}
