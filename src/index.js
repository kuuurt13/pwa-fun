import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import storage from 'redux-persist/es/storage'
import logger from 'redux-logger'

import reducers from './reducers'
import rootSaga from './sagas'

import App from './App'
import './index.css'

const sagaMiddleware = createSagaMiddleware()

const middleware = [logger,  sagaMiddleware]

const persistorConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['search']
}

const reducer = persistCombineReducers(persistorConfig, reducers)

const store = compose(
  applyMiddleware(...middleware),
)(createStore)(reducer)

const persistor = persistStore(store)
// persistor.purge().then(console.log('Persistor Purged !'))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
,
document.getElementById('root'))

registerServiceWorker()
injectTapEventPlugin()
