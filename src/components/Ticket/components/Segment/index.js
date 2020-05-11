// @flow

import React, { Fragment } from 'react'
import {
  SegmentDataWrapper,
  Text,
  Title,
  SegmentWrapper,
} from './styled'
import getFormattedTime from './helpers/getFormattedTime'
import getFormattedDuration from './helpers/getFormattedDuration'
import getTransfersCount from './helpers/getTransfersCount'
import type { TSegment } from '../../../../types'

type TSegmentData = {
  title: string,
  children: Element<any>,
}

const getSegmentDirection = (origin, destination) => `${origin} - ${destination}`

const SegmentData = ({ title, children }: TSegmentData) => (
  <SegmentDataWrapper>
    <Title>
      {title}
    </Title>
    <Text>
      {children}
    </Text>
  </SegmentDataWrapper>
)

const Segment = ({ segment }: TSegment) => {
  const {
    origin,
    destination,
    date,
    duration,
    stops,
  } = segment

  const stopLength = stops.length

  return (
    <SegmentWrapper>
      <SegmentData
        title={getSegmentDirection(origin, destination)}
      >
        {getFormattedTime(date, duration)}
      </SegmentData>
      <SegmentData
        title="В пути"
      >
        {getFormattedDuration(duration)}
      </SegmentData>
      <SegmentData
        title={getTransfersCount(stopLength)}
      >
        {stops.map((stop, index) => (
          <Fragment
            key={stop}
          >
            {stop}
            {index !== stopLength - 1 && ', '}
          </Fragment>
        ))}
      </SegmentData>
    </SegmentWrapper>
  )
}

export default Segment
