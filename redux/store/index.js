import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from '../sagas'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

/* Reducer */
import appTodo from '../reducers'

const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(appTodo, composeWithDevTools(applyMiddleware(sagaMiddleware)))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

const wrapper = createWrapper(makeStore)

export default wrapper
