// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Filters from '../../components/TicketsList/Filters'
import Sorts from '../../components/TicketsList/Sorts'
import TicketsList from '../../components/TicketsList'
import Logo from '../../components/Logo'
import { actionCreators } from './ducks'
import {
  Page,
  Container,
  Header,
  SideBar,
  Content,
  Main,
} from './styled'

type TProps = {
  getTickets: () => void,
}

class App extends PureComponent<TProps> {
  componentDidMount() {
    const { getTickets } = this.props

    getTickets()
  }

  render() {
    return (
      <Page>
        <Header>
          <Container>
            <Logo />
          </Container>
        </Header>
        <Main>
          <Container>
            <SideBar>
              <Filters />
            </SideBar>
            <Content>
              <Sorts />
              <TicketsList />
            </Content>
          </Container>
        </Main>
      </Page>
    )
  }
}

const mapDispatchToProps = {
  ...actionCreators,
}

export default connect(null, mapDispatchToProps)(App)
