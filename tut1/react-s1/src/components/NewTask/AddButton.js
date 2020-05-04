import styled from 'styled-components';
import Button from '../Button'

export default styled(Button)`
  background: #FCB500;
  width: 40px;
  height: 40px;
  color: blue;
  &:hover {
    background: transparent;
    color: #FCB500;
  }
`