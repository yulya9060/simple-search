import styled from 'styled-components'

export const SortingButton = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  padding: 15px 57px;
  border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid #DFE5EC')};
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#4A4A4A')};
  background-color: ${({ isSelected }) => (isSelected ? '#2196F3' : '#FFFFFF')};

  &:first-child {
    border-radius: 6px 0 0 6px;
  }

  &:last-child {
    border-radius: 0 6px 6px 0;
  }

  cursor: pointer;
  width: 50%;
`
