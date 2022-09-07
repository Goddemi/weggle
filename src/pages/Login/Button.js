import React from 'react';
import styled from 'styled-components';

const LoginButton = ({ signIn }) => {
  return <WideButton onClick={signIn}>LOGIN</WideButton>;
};

export default LoginButton;

const WideButton = styled.button`
  width: 100%;
  background-color: #ff0073;
  margin: 35px 0 15px;
  padding: 13px 0;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;
