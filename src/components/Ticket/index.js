// @flow

import React from 'react'
import getCarrierImg from './helpers/getCarrierImg'
import getFormattedPrice from './helpers/getFormattedPrice'
import Segment from './components/Segment'
import {
  Wrapper, Price, Carrier, TicketHeader,
} from './styled'
import type { TTicket } from '../../types'

const Ticket = ({ ticket }: TTicket) => {
  const { price, carrier, segments } = ticket

  return (
    <Wrapper>
      <TicketHeader>
        <Price>{getFormattedPrice(price)}</Price>
        <Carrier
          src={getCarrierImg({ iataCode: carrier })}
          srcRetina={getCarrierImg({ iataCode: carrier, isRetina: true })}
          iata={carrier}
        />
      </TicketHeader>
      {segments.map((segment) => {
        const { date } = segment
        const key = new Date(date).getTime()

        return (
          <Segment
            key={key}
            segment={segment}
          />
        )
      })}
    </Wrapper>
  )
}

export default Ticket
