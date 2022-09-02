import React, { useState } from 'react';
import styled from 'styled-components';

const OptionValue = ({ id, optionContent, setOptionContent }) => {
  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      const targetId = e.target.parentElement.id;
      const newValue = { valueId: Date.now(), valueContent: e.target.value };
      let newOptionContent = [...optionContent];
      newOptionContent.forEach(element => {
        String(element.id) === targetId && element.value.push(newValue);
      });
      setOptionContent(newOptionContent);
      e.target.value = '';
    }
  };

  const targetOption = optionContent.filter(element => {
    return element.id === id;
  });
  const targetValue = targetOption[0].value;

  const deleteValue = e => {
    // const eachValueId = e.target.parentElement.id;
    // const newOptionContent = [...optionContent];
    // const hi = newOptionContent.map(r => {
    //   return r.value.filter(element => {
    //     return element.valueId !== eachValueId;
    //   });
    // });
    // console.log('hi', hi);
  };

  return (
    <ValueSet id={id}>
      {targetValue.map((element, i) => {
        return (
          <Value key={i} id={element.valueId}>
            <span>{element.valueContent}</span>
            <button
              onClick={e => {
                deleteValue(e);
              }}
            >
              X
            </button>
          </Value>
        );
      })}

      <input
        placeholder="Enter 키를 눌러 연속 입력"
        onKeyPress={e => {
          handleEnterPress(e);
        }}
      />
    </ValueSet>
  );
};

export default OptionValue;

const ValueSet = styled.div`
  input {
    width: 500px;
  }
`;

const Value = styled.div`
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
