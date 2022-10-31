import React from 'react';
import styled from 'styled-components';

const OptionList = ({ optionContent }) => {
  return (
    <OptionListContainer>
      <RequiredOption>
        <span>필수옵션</span>
        <RequiredList>
          {optionContent.map((element, i) => {
            return (
              <RequiredContainer key={i}>
                <RequiredTitle>{element.title}</RequiredTitle>
                <RequiredValue>
                  {element.value.map((element, i) => {
                    return <div key={i}>{element.valueContent}</div>;
                  })}
                </RequiredValue>
              </RequiredContainer>
            );
          })}
          <OptionPrice>
            <span> 가격</span>
          </OptionPrice>
        </RequiredList>
      </RequiredOption>
      <SelectiveOption>
        <span>선택옵션</span>
      </SelectiveOption>
      <SelectiveList />
    </OptionListContainer>
  );
};

export default OptionList;

const OptionListContainer = styled.div``;

const RequiredOption = styled.div`
  margin-bottom: 20px;

  span {
    display: inline-block;
    margin-bottom: 20px;
    color: gray;
    font-size: 14px;
  }
`;

const SelectiveOption = styled.div``;

const RequiredList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: ${props => props.theme.backgroundGray};
`;

const OptionPrice = styled.div``;

const RequiredContainer = styled.div``;

const RequiredTitle = styled.div`
  margin-bottom: 50px;
  color: gray;
  font-size: 15px;
`;

const RequiredValue = styled.div`
  div {
    margin-bottom: 30px;
  }
`;

const SelectiveList = styled.div``;
