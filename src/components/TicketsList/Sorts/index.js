// @flow

import React from 'react'
import { connect } from 'react-redux'
import { selectSorts } from '../selectors'
import { actionCreators } from './ducks'
import { SORTS } from './consts'
import SortTab from './components/SortTab'
import {
  SortTabs,
} from './styled'
import type { TSorts } from '../../../types'

type TProps = {
  sorts: TSorts,
  changeSort: (string) => void,
}

const Sorts = ({ sorts, changeSort }: TProps) => (
  <SortTabs>
    {Object.entries(SORTS).map(([key, value]) => (
      <SortTab
        key={key}
        name={key}
        value={sorts.key === key}
        title={value}
        onChangeSort={(name) => changeSort({ name })}
      />
    ))}
  </SortTabs>
)

const mapStateToProps = (state) => ({
  sorts: selectSorts(state),
})

const mapDispatchToProps = {
  ...actionCreators,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorts)
