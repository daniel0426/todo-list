import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { colors } from '../styles';

const DeleteIconStyle = styled(FaTrashAlt)`
  color: ${colors.primary};
`;

const DeleteIcon = () => {
  return <DeleteIconStyle />;
};

export default DeleteIcon;
