import { createSelector } from 'reselect'
import sortingTickets from './helpers/sortingTickets'
import filteringTickets from './helpers/filteringTickets'

const selectTicketsData = (state) => state.ticketsData

export const selectIsLoading = (state) => {
  const ticketsData = selectTicketsData(state)

  return ticketsData.isLoading
}

export const selectIsCompletely = (state) => {
  const ticketsData = selectTicketsData(state)

  return ticketsData.isCompletely
}

export const selectIsError = (state) => {
  const ticketsData = selectTicketsData(state)

  return ticketsData.isError
}


export const selectFilters = (state) => state.filters
export const selectSorts = (state) => state.sorts


const selectTickets = (state) => {
  const ticketsData = selectTicketsData(state)

  return ticketsData.tickets
}

export const selectFilteredTickets = createSelector(
  selectFilters,
  selectSorts,
  selectTickets,
  selectIsCompletely,
  (
    filters,
    sorts,
    tickets,
    isCompletely,
  ) => {
    if (!tickets.length || !isCompletely) return []

    const { key } = sorts
    const filterTickets = filteringTickets(tickets, filters)

    return sortingTickets(filterTickets, key)
  },
)
