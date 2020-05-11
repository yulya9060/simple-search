import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 754px;
  justify-content: center;
  align-items: flex-start;
  margin: 0 103px;
`

export const Header = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
`

export const SideBar = styled.div`
   flex: 0;
   position: sticky;
   top: 10px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
`
