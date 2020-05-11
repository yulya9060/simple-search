// @flow

export const GET_TICKETS = 'GET_TICKETS'
export const GET_TICKETS_CHAIN = 'GET_TICKETS_CHAIN'
export const GET_TICKETS_COMPLETELY = 'GET_TICKETS_COMPLETELY'
export const GET_TICKETS_ERROR = 'GET_TICKETS_ERROR'

const getTickets = () => ({
  type: GET_TICKETS,
  payload: {
    error: null,
    isError: false,
  },
})

const getTicketsChain = (tickets) => ({
  type: GET_TICKETS_CHAIN,
  payload: {
    tickets,
    error: null,
    isError: false,
  },
})

const getTicketsCompletely = (tickets) => ({
  type: GET_TICKETS_COMPLETELY,
  payload: {
    tickets,
    isCompletely: true,
    error: null,
    isError: false,
  },
})

const getTicketsError = (error) => ({
  type: GET_TICKETS_ERROR,
  payload: {
    error,
    isError: true,
  },
})

export const actionCreators = {
  getTickets,
  getTicketsChain,
  getTicketsCompletely,
  getTicketsError,
}


const INITIAL_STATE = {
  tickets: [],
  error: null,
  isCompletely: false,
  isError: false,
}

const sortsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_TICKETS:
      return {
        ...state,
        ...payload,
      }
    case GET_TICKETS_CHAIN:
      return {
        ...state,
        tickets: [
          ...state.tickets,
          ...payload.tickets,
        ],
        error: payload.error,
        isError: payload.isError,
      }
    case GET_TICKETS_COMPLETELY:
      return {
        ...state,
        tickets: [
          ...state.tickets,
          ...payload.tickets,
        ],
        isCompletely: payload.isCompletely,
        error: payload.error,
        isError: payload.isError,
      }
    case GET_TICKETS_ERROR: {
      return {
        ...state,
        ...payload,
      }
    }

    default:
      return state
  }
}

export default sortsReducer
