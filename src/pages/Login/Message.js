import React from 'react';
import styled from 'styled-components';

const Message = () => {
  return <Warning>가입하지 않은 아이디거나, 잘못된 비밀번호입니다.</Warning>;
};

export default Message;

const Warning = styled.p`
  color: #ff0073;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;
