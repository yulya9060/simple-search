// @flow

type TArgs = {
  [string]: string,
}

const setAllFiltersAreFalse = (filters: TArgs) => {
  const newFiltersValues = {}

  Object.keys(filters).forEach((key) => {
    newFiltersValues[key] = false
  })

  return newFiltersValues
}

export default setAllFiltersAreFalse
