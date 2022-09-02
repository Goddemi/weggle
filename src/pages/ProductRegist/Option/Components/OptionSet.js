import React from 'react';
import styled from 'styled-components';
import OptionValue from './OptionValue';

const OptionSet = ({ id, optionContent, setOptionContent }) => {
  const modifyTitle = e => {
    const targetId = e.target.parentElement.id;
    const newTitle = e.target.value;
    let newOptionContent = [...optionContent];
    newOptionContent.forEach(element => {
      String(element.id) === targetId && (element.title = newTitle);
    });
    setOptionContent(newOptionContent);
  };

  return (
    <OptionInfo>
      <OptionContent id={id}>
        <input
          placeholder="옵션명을 입력해 주세요."
          onChange={e => {
            modifyTitle(e);
          }}
        />
      </OptionContent>
      <OptionValue
        id={id}
        optionContent={optionContent}
        setOptionContent={setOptionContent}
      />

      <input type="checkbox" />

      <div className="close">✕</div>
    </OptionInfo>
  );
};

export default OptionSet;

const OptionContent = styled.div`
  input {
    width: 300px;
  }
`;

const OptionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 20px 10px;
  margin-top: 20px;
  background-color: ${props => props.theme.backgroundGray};

  > div {
    margin: 0 20px;
  }

  div {
    font-size: 14px;
    color: gray;
  }

  input {
    padding-top: 25px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.lineGray};
    outline: none;
    background-color: ${props => props.theme.backgroundGray};
  }

  .close {
    cursor: pointer;
  }
`;
