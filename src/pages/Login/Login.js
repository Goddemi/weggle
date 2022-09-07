import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Input from './Input';
import Message from './Message';
import LoginButton from './Button';

const Login = () => {
  const navigate = useNavigate();

  const [person, setPerson] = useState({
    id: '',
    pw: '',
  });

  const [passwordShown, setPassword] = useState(true);

  const handleInput = e => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  // const isAllValid = person.id && person.pw;

  const passwordChange = () => {
    setPassword(!passwordShown);
  };

  const signIn = () => {
    // fetch('/data/userAccountData.json', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username: person.id,
    //     password: person.pw,
    //   }),
    // });
    // .then(response => response.json())
    // .then(result => {
    //   if (result.message === 'SUCCESS') {
    //     navigate('/');
    //     localStorage.setItem('access_token', result.access_token);
    //   } else {
    //     alert('로그인 실패');
    //   }
    // });
    navigate('/');
  };

  return (
    <div>
      <Container>
        <LoginWrap>
          <Logo />
          <form>
            <Input
              onChange={handleInput}
              person={person}
              passwordShown={passwordShown}
              passwordChange={passwordChange}
            />
          </form>
          {!signIn && <Message />}
          <LoginButton signIn={signIn} />

          <ForgotPw to="/">Forgot password?</ForgotPw>
        </LoginWrap>
      </Container>
    </div>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 378px;
`;

const ForgotPw = styled(Link)`
  color: #797c82;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  font-weight: 300;
`;
