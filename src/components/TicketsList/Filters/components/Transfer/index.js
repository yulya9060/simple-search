// @flow

import React from 'react'
import {
  StyledCheckbox,
  Label,
  HiddenCheckbox,
  TransferContainer,
} from './styled'

type TProps = {
  name: string,
  value: boolean,
  title: string,
  onChangeFilter: (string, string) => void,
}

const handleChange = (event, name, onChangeFilter) => {
  onChangeFilter(name, event.target.checked)
}

const Transfer = ({
  name,
  value,
  title,
  onChangeFilter,
}: TProps) => (
  <TransferContainer>
    <Label
      htmlFor={name}
      checked={value}
    >
      <StyledCheckbox
        checked={value}
      >
        <HiddenCheckbox
          id={name}
          onChange={(event) => handleChange(event, name, onChangeFilter)}
          checked={value}
        />
      </StyledCheckbox>
      {title}
    </Label>
  </TransferContainer>
)

export default Transfer
