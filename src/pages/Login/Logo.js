import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoArea to="/login">
      <img src="/images/logo_2.png" alt="logo" />
    </LogoArea>
  );
};

export default Logo;

const LogoArea = styled(Link)`
  margin-bottom: 35px;
  text-align: center;
`;
