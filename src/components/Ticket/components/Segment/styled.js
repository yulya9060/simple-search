import styled from 'styled-components'

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #A0B0B9;
`

export const Text = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #4A4A4A
`

export const SegmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  & + & {
    padding: 10px 20px 20px;
  }
`

export const SegmentDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 141px;
`
