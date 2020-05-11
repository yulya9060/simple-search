import styled, { css } from 'styled-components'

const checkedStyles = css`
  &::after {
    position: absolute;
    content: '';
    height: 5px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    border-color: #2196F3;
    transform: rotate(-45deg);

    left: 4px;
    top: 4px;
  }
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  transition: all 150ms;
  border: 1px solid #9ABBCE;
  box-sizing: border-box;
  border-radius: 2px;
  position: relative;
  margin-right: 10px;

  ${(props) => props.checked && checkedStyles}
`

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: #4A4A4A;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const TransferContainer = styled.div`
  display: flex;
  padding: 10px 20px;

  &:hover {
    background-color: #F1FCFF;
  }

  &:last-child {
    padding: 10px 20px 20px;
  }
`
