import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const PriceInput = ({ title, priceHandler }) => {
  return (
    <PriceInputContent>
      <span>{title}</span>
      <input
        onChange={e => {
          priceHandler(e);
        }}
      />
      <div>원</div>
    </PriceInputContent>
  );
};

export default PriceInput;

const PriceInputContent = styled.div`
  ${variables.registerBox}
  border-bottom: none;

  input {
    width: 200px;
    height: 100%;
    background-color: ${props => props.theme.backgroundGray};
    border: 1px solid ${props => props.theme.lineGray};
    outline: none;
  }

  div {
    height: 23px;
    line-height: 23px;
    padding: 1px 10px;
    border: 1px solid ${props => props.theme.lineGray};
    border-left: none;
    background-color: ${props => props.theme.backgroundGray};
    font-size: 13px;
  }
`;
