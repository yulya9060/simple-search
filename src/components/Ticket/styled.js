import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  width: 100%;

  & + & {
    margin-top: 20px;
  }
`

export const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #2196F3;
`

export const Carrier = styled.img.attrs(({ iata, src, srcRetina }) => ({
  srcSet: `${src} 1x, ${srcRetina} 2x`,
  alt: iata,
}))`
  height: 36px;
  width: auto;
`

export const TicketHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 20px 20px;
`
