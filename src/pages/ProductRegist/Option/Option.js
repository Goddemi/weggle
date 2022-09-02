import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import RegisterToggle from '../../../components/RegisterToggle/RegisterToggle';
import variables from '../../../styles/variables';
import OptionSet from './Components/OptionSet';
import OptionList from './Components/OptionList';

const Option = () => {
  const [optionBtn, setOptionBtn] = useState('');
  const [optionContent, setOptionContent] = useState([]);

  const addTitle = () => {
    const optionId = Date.now();
    setOptionContent([
      ...optionContent,
      { id: optionId, title: '', value: [] },
    ]);
  };

  console.log(optionContent);

  const handleOption = (event, newAlignment) => {
    setOptionBtn(newAlignment);
  };

  return (
    <OptionContainer>
      <RegisterTitle title="옵션" />

      <OptionContent>
        <span>옵션 설정</span>
        <RegisterToggle
          className="toggle"
          value={optionBtn}
          handler={handleOption}
          toggleValue="option"
        />
      </OptionContent>
      {optionBtn === 'option' && (
        <OptionBox>
          <OptionMenu>
            <div>옵션명</div>
            <div>옵션값</div>
          </OptionMenu>

          {optionContent.map(element => {
            return (
              <OptionSet
                key={element.id}
                id={element.id}
                optionContent={optionContent}
                setOptionContent={setOptionContent}
              />
            );
          })}

          <OptionAddBtn onClick={addTitle}>옵션 추가</OptionAddBtn>
          <OptionList
            optionContent={optionContent}
            setOptionContent={setOptionContent}
          />
        </OptionBox>
      )}
    </OptionContainer>
  );
};
export default Option;

const OptionContainer = styled.div``;

const OptionContent = styled.div`
  ${variables.registerBox}

  span:not(.toggle) {
    font-size: 13px;
    ${variables.subMenuTitle}
  }
`;

const OptionBox = styled.div`
  border: 1px solid ${props => props.theme.lineGray};
  border-top: none;
  padding: 16.5px 20px;
`;

const OptionMenu = styled.div`
  display: flex;

  div {
    &:first-child {
      width: 300px;
      margin-left: 20px;
    }

    &:last-child {
      width: 500px;
      margin-left: 85px;
    }
  }
`;

const OptionAddBtn = styled.button`
  width: 121px;
  height: 30px;
  margin: 20px 0 0 10px;
  background-color: white;
  border: 1px solid ${props => props.theme.lineGray};
  cursor: pointer;
`;
