/* eslint-disable no-underscore-dangle */
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import filterReducer from './components/TicketsList/Filters/ducks'
import sortReducer from './components/TicketsList/Sorts/ducks'
import ticketsReducer from './containers/App/ducks'
import Sagas from './containers/App/sagas'

const rootReducer = combineReducers({
  filters: filterReducer,
  sorts: sortReducer,
  ticketsData: ticketsReducer,
})

const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
  applyMiddleware(sagaMiddleware, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
)
const initialState = {}

const store = createStore(rootReducer, initialState, enhancers)

sagaMiddleware.run(Sagas)

export default store
