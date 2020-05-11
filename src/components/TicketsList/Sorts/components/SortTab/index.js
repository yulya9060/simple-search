// @flow

import React from 'react'
import {
  SortingButton,
} from './styled'

type TProps = {
  name: string,
  value: boolean,
  title: string,
  onChangeSort: (string) => void,
}

const handleChange = (name, onChangeSort) => onChangeSort(name)

const SortTab = ({
  name,
  value,
  title,
  onChangeSort,
}: TProps) => (
  <SortingButton
    isSelected={value}
    onClick={() => handleChange(name, onChangeSort)}
  >
    {title}
  </SortingButton>
)

export default SortTab
