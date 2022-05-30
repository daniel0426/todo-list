import { colors } from './../styles';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 15px;
  color: #000;
  background-color: ${colors.primary};
  font-size: 1.3em;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export default Button;
