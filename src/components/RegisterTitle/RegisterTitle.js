import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const RegisterTitle = ({ title }) => {
  return <RegisterBoxTitle>{title}</RegisterBoxTitle>;
};

export default RegisterTitle;

const RegisterBoxTitle = styled.div`
  ${variables.registerBox}
  border-bottom: none;
`;
