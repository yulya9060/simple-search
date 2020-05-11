// @flow

type TArgs = {
  [string]: string,
}

const checkAllFiltersAreTrue = (filters: TArgs): boolean => {
  const filtersWithoutAllTransferFilterLength = Object.keys(filters)
    .filter((filterName) => !filterName.includes('all')).length

  let result = 0

  Object.keys(filters).forEach((key) => {
    if (!key.includes('all') && filters[key]) {
      result += 1
    }
  })

  return result === filtersWithoutAllTransferFilterLength
}

export default checkAllFiltersAreTrue
