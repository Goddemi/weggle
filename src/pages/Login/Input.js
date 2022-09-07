import React from 'react';
import styled from 'styled-components';

const Input = ({ person, passwordShown, passwordChange }) => {
  return (
    <div>
      <LoginInput
        type="text"
        name="id"
        defaultValue={person.id}
        placeholder="USERNAME"
        autoComplete="on"
      />
      <FormBox>
        <LoginInput
          className="pw"
          type={passwordShown ? 'password' : 'text'}
          name="pw"
          defaultValue={person.pw}
          placeholder="PASSWORD"
        />
        <i
          onClick={passwordChange}
          className={`fa-solid ${passwordShown ? 'fa-eye-slash' : 'fa-eye'}`}
        />
      </FormBox>
    </div>
  );
};

export default Input;

const LoginInput = styled.input`
  width: 100%;
  background-image: url(/images/login/id.png);
  background-repeat: no-repeat;
  background-position: 18px;
  margin: 10px 0;
  box-sizing: border-box;
  padding: 13px 18px 13px 53px;
  border: 1px solid black;
  border-radius: 4px;

  &.pw {
    background-image: url(/images/login/pw.png);
  }

  &::placeholder {
    color: #dadada;
  }
`;

const FormBox = styled.div`
  position: relative;

  i {
    position: absolute;
    top: 24px;
    right: 15px;
    font-size: 16px;
    color: #dadada;
  }
`;
