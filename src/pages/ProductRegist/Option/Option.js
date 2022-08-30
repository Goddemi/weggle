import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import RegisterToggle from '../../../components/RegisterToggle/RegisterToggle';
import variables from '../../../styles/variables';
import OptionSet from './Components/OptionSet';

const Option = () => {
  const [optionBtn, setOptionBtn] = useState('');

  const [optionTitle, setOptionTitle] = useState([]);

  const addTitle = e => {
    setOptionTitle([...optionTitle, '']);
  };

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

          {optionTitle.map((title, i) => {
            return (
              <OptionInfo key={i}>
                <OptionTitle>
                  <input />
                </OptionTitle>
                <OptionSet />

                <EttentialBox>
                  <input type="checkbox" />
                </EttentialBox>
                <div className="close">✕</div>
              </OptionInfo>
            );
          })}

          <OptionAddBtn onClick={addTitle}>옵션 추가</OptionAddBtn>
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
  justify-content: space-between;

  div {
    &:first-child {
      width: 300px;
    }

    &:last-child {
      width: 500px;
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

const OptionTitle = styled.div`
  input {
    width: 300px;
  }
`;

const OptionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

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
  }

  .close {
    cursor: pointer;
  }
`;

const EttentialBox = styled.div``;
