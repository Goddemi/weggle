import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import RegisterToggle from '../../../components/RegisterToggle/RegisterToggle';
import variables from '../../../styles/variables';
import CloseIcon from '@mui/icons-material/Close';

const Option = () => {
  const [optionBtn, setOptionBtn] = useState('');

  const handleOption = (event, newAlignment) => {
    setOptionBtn(newAlignment);
  };
  return (
    <OptionContainer>
      <RegisterTitle title="옵션" />

      <OptionContent>
        <span>옵션 설정</span>
        <RegisterToggle
          class="toggle"
          value={optionBtn}
          handler={handleOption}
          toggleValue="option"
        />
      </OptionContent>
      {optionBtn === 'option' && (
        <OptionBox>
          <OptionInfo>
            <OptionTitle>
              <div>옵션명</div>
              <input />
            </OptionTitle>
            <OptionValue>
              <div>옵션값</div>
              <input placeholder="Enter 또는 Tab키를 눌러 연속 입력" />
            </OptionValue>
            <EttentialBox>
              <input type="checkbox" />
            </EttentialBox>
            <div className="close">X</div>
          </OptionInfo>

          <OptionAddBtn>옵션 추가</OptionAddBtn>
        </OptionBox>
      )}
    </OptionContainer>
  );
};
export default Option;

const OptionContent = styled.div`
  ${variables.registerBox}

  span:not(.toggle) {
    font-size: 13px;
    ${variables.subMenuTitleWidth}
  }
`;

const OptionContainer = styled.div``;

const OptionBox = styled.div`
  border: 1px solid ${props => props.theme.lineGray};
  border-top: none;
  padding: 16.5px 20px;
`;

const OptionAddBtn = styled.button`
  width: 121px;
  height: 30px;
  margin: 20px 0 0 10px;
  background-color: white;
  border: 1px solid ${props => props.theme.lineGray};
  cursor: pointer;
`;

const OptionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    margin: 0 20px;
  }

  div {
    padding: 10px 0 20px 0;
    font-size: 14px;
    color: gray;
  }

  input {
    border: none;
    border-bottom: 1px solid ${props => props.theme.lineGray};
    outline: none;
  }

  .close {
    cursor: pointer;
  }
`;

const OptionTitle = styled.div`
  input {
    width: 300px;
  }
`;

const OptionValue = styled.div`
  input {
    width: 500px;
  }
`;

const EttentialBox = styled.div``;
