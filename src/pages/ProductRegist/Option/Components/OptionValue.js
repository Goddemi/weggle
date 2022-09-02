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
    const eachValueId = e.target.parentElement.id;
  };
  //value가 여러개다. value라는 키값안에 여러개의 값이 들어있는거다. {id : aa value : aa}
  //뭐가 남앗냐면, 그 엑스 버튼, 즉 지우는 버튼을 클릭하면 걔가 데이터에서 없어져야해.
  // 그놈의 아이디를 그놈이 생성될때 주고 있고, 그놈의 아이디와 총 optioncontent 안의 value가 같을 때
  // 그놈을 지우고 다시 optionContent에 set해준다. 이거를 구현하면 됨 알겠?

  //뭘 바꿔야 하냐면, 그 엘리먼트 안의 벨류 를 바꿔야해. 똑같은 밸류를 없애고 set 하면 됨.

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
