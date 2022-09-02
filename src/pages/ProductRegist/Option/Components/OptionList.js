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
                <RequiredTitle>hi</RequiredTitle>
              </RequiredContainer>
            );
          })}
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

const RequiredOption = styled.div``;

const SelectiveOption = styled.div``;

const RequiredList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RequiredContainer = styled.div``;

const RequiredTitle = styled.div``;

const SelectiveList = styled.div``;
