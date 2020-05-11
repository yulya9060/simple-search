// @flow

import { BY_CHEAP_SORT, BY_QUICK_SORT } from '../Sorts/consts'
import type { TTickets } from '../../../types'

const sortingTickets = (tickets: TTickets, sortingKey: string) => {
  if (!tickets.length || !sortingKey) return []

  const sortTickets = [
    ...tickets,
  ]

  switch (true) {
    case (sortingKey === BY_CHEAP_SORT):
      return sortTickets.sort((a, b) => a.price - b.price)
    case (sortingKey === BY_QUICK_SORT):
      return sortTickets.sort((a, b) => {
        const aDuration = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const bDuration = b.segments.reduce((acc, segment) => acc + segment.duration, 0)

        return aDuration - bDuration
      })
    default:
      return sortTickets
  }
}

export default sortingTickets
