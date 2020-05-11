// @flow

import React from 'react'
import { connect } from 'react-redux'
import Transfer from './components/Transfer'
import { selectFilters } from '../selectors'
import { actionCreators } from './ducks'
import {
  Card,
  Title,
  TransfersWrapper,
} from './styled'
import { TRANSFERS } from './consts'
import type { TFilters } from '../../../types'

type TProps = {
  filters: TFilters,
  changeFilter: (string, boolean) => void,
}

const Filters = ({ filters, changeFilter }: TProps) => (
  <Card>
    <Title>
      Количество пересадок
    </Title>
    <TransfersWrapper>
      {Object.entries(filters).map(([key, value]) => (
        <Transfer
          key={key}
          name={key}
          value={value}
          title={TRANSFERS[key]}
          onChangeFilter={(name, checked) => changeFilter({ name, value: checked })}
        />
      ))}
    </TransfersWrapper>
  </Card>
)

const mapStateToProps = (state) => ({
  filters: selectFilters(state),
})

const mapDispatchToProps = {
  ...actionCreators,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
