import React, { useState } from 'react';
import styled from 'styled-components';

const OptionSet = ({ optionTitle, setOptionTitle }) => {
  const [optionValue, setOptionValue] = useState([]);

  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      setOptionValue([...optionValue, e.target.value]);
      e.target.value = '';
    }
  };

  const deleteValue = e => {
    e.target.parentElement.remove();
  };

  return (
    <OptionValue>
      {optionValue.map((element, i) => {
        return (
          <Values key={i}>
            <span>{element}</span>
            <button onClick={deleteValue}>X</button>
          </Values>
        );
      })}
      <input
        placeholder="Enter 키를 눌러 연속 입력"
        onKeyPress={e => {
          handleEnterPress(e);
        }}
      />
    </OptionValue>
  );
};

export default OptionSet;

const OptionValue = styled.div`
  input {
    width: 500px;
  }
`;

const Values = styled.div`
  border-bottom: 1px solid #dadada;
  padding: 25px 0 1px 0;

  span {
    font-size: 16px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
