// @flow

import setInitialState from './helpers/setInitialState'

const CHANGE_SORT = 'CHANGE_SORT'

const changeSort = (payload) => ({
  type: CHANGE_SORT,
  payload,
})

export const actionCreators = {
  changeSort,
}


const INITIAL_STATE = setInitialState()

const sortsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_SORT:
      return {
        ...state,
        key: payload.name,
      }
    default:
      return state
  }
}

export default sortsReducer
