// @flow

import {
  ALL_TRANSFERS_FILTER,
  TRANSFER_NONE,
  TRANSFER_ONE,
  TRANSFER_THREE,
  TRANSFER_TWO,
} from '../Filters/consts'
import type {
  TTicket,
  TTickets,
  TFilters,
} from '../../../types'

const filterTicket = (ticket: TTicket, filterKeys: string[]) => {
  const stopsLength = ticket.segments.reduce((acc, segment) => segment.stops.length, 0)

  return filterKeys.some((filterKey) => {
    let isValidTicket

    switch (true) {
      case filterKey === TRANSFER_NONE: {
        isValidTicket = stopsLength === 0
        break
      }
      case filterKey === TRANSFER_ONE: {
        isValidTicket = stopsLength === 1
        break
      }
      case filterKey === TRANSFER_TWO: {
        isValidTicket = stopsLength === 2
        break
      }
      case filterKey === TRANSFER_THREE: {
        isValidTicket = stopsLength === 3
        break
      }
      default: {
        isValidTicket = false
      }
    }

    return isValidTicket
  })
}

const filteringTickets = (tickets: TTickets, filters: TFilters) => {
  const filterKeys = Object.keys(filters)
    .filter((key) => key !== ALL_TRANSFERS_FILTER && filters[key])

  if (!tickets.length || !filterKeys.length) return []

  if (filters[ALL_TRANSFERS_FILTER]) return tickets

  const operatingTickets = [
    ...tickets,
  ]

  return operatingTickets.filter((ticket) => filterTicket(ticket, filterKeys))
}

export default filteringTickets
