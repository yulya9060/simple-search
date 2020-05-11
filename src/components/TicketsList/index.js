// @flow

import React from 'react'
import { connect } from 'react-redux'
import Ticket from '../Ticket'
import { TicketsWrapper } from './styled'
import {
  selectIsLoading,
  selectIsError,
  selectFilteredTickets,
  selectIsCompletely,
} from './selectors'
import type { TTickets } from '../../types'
import InformationCard from '../InformationCard'

const TicketsList = ({ tickets, isCompletely, isError }: TTickets) => {
  if (!isCompletely || isError) {
    return (
      <InformationCard
        text="Идет загрузка билетов, пожалуйста подождите....."
      />
    )
  }

  if (isCompletely && isError) {
    return (
      <InformationCard
        text="Произошла ошибка загрузки билетов, пожалуйста перезагрузите страницу"
      />
    )
  }

  if (!tickets.length) {
    return (
      <InformationCard
        text="Расслабьте фильтры"
      />
    )
  }

  return (
    <TicketsWrapper>
      {tickets.slice(0, 20).map((ticket, index) => {
        const { carrier, price } = ticket
        const key = carrier + price + index

        return (
          <Ticket
            key={key}
            ticket={ticket}
          />
        )
      })}
    </TicketsWrapper>
  )
}

const mapStateToProps = (state) => ({
  tickets: selectFilteredTickets(state),
  isLoading: selectIsLoading(state),
  isCompletely: selectIsCompletely(state),
  isError: selectIsError(state),
})

export default connect(mapStateToProps, null)(TicketsList)
