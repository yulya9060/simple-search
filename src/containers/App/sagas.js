import { call, takeLatest, put } from 'redux-saga/effects'
import { fetchSearchId, fetchTickets } from '../../api'
import {
  GET_TICKETS,
  actionCreators,
} from './ducks'

const {
  getTicketsChain,
  getTicketsCompletely,
  getTicketsError,
} = actionCreators

function* getTickets(searchId) {
  try {
    const response = yield call(fetchTickets, searchId)
    const {
      tickets,
      stop,
    } = response

    yield put(getTicketsChain(tickets))

    if (!stop) {
      setTimeout(yield* getTickets(searchId), 1000)
    } else {
      yield put(getTicketsCompletely(tickets))
    }
  } catch (error) {
    yield put(getTicketsError(error))

    setTimeout(yield* getTickets(searchId), 1000)
  }
}

function* getSearchId() {
  try {
    const { searchId } = yield call(fetchSearchId)

    yield* getTickets(searchId)
  } catch (error) {
    yield put(getTicketsError(error))
  }
}

function* watchSearchRequest() {
  yield takeLatest(GET_TICKETS, getSearchId)
}

export default watchSearchRequest
