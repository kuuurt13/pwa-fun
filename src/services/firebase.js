import * as firebase from 'firebase'
import config from '../configs/firebase'
import { eventChannel } from 'redux-saga'

const app = firebase.initializeApp(config)

export const database = app.database()

export function subscribe() {
  const listener = eventChannel(emit => {
    database.ref().on('value', data => emit(data.val() || {}))
    return () => database.ref().off(listener)
  })

  return listener
}

export function add(value) {
  value && database.ref().push(value)
}
