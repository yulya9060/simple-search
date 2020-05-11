// @flow

import { TRANSFERS } from '../consts'

const setInitialState = () => {
  const initialState = {}

  Object.keys(TRANSFERS).forEach((key) => {
    initialState[key] = true
  })

  return initialState
}

export default setInitialState
