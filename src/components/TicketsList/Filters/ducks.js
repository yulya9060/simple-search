import setAllFiltersAreFalse from './helpers/setAllFiltersAreFalse'
import checkAllFiltersAreTrue from './helpers/checkAllFiltersAreTrue'
import { ALL_TRANSFERS_FILTER } from './consts'
import setInitialState from './helpers/setInitialState'

const CHANGE_FILTER = 'CHANGE_FILTER'

const changeFilter = (payload) => ({
  type: CHANGE_FILTER,
  payload,
})

export const actionCreators = {
  changeFilter,
}

const INITIAL_STATE = setInitialState()

const filtersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER: {
      const newState = {
        ...state,
        [payload.name]: payload.value,
      }

      if (payload.name.includes('all')) {
        return payload.value ? INITIAL_STATE : setAllFiltersAreFalse(newState)
      }

      if (checkAllFiltersAreTrue(newState)) {
        return INITIAL_STATE
      }

      return {
        ...newState,
        [ALL_TRANSFERS_FILTER]: false,
      }
    }
    default:
      return state
  }
}

export default filtersReducer
