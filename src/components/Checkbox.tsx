import React, { ComponentProps } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { colors } from '../styles';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: ${(props) => (props.checked ? colors.primary : 'none')};
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  transition: all 100ms;
`;

type Props = ComponentProps<StyledComponent<'input', any, {}>>;

const Checkbox: React.FC<Props> = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox {...props} type="checkbox" checked={checked} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);

export default Checkbox;
