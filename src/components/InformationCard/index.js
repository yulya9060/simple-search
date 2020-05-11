// @flow

import React from 'react'
import Card from './styled'

type TProps = {
  text: string,
}

const InformationCard = ({ text } : TProps) => (
  <Card>
    {text}
  </Card>
)

export default InformationCard
