import React, { useState } from 'react';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import styled from 'styled-components';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import variables from '../../../styles/variables';
import PriceInput from '../../../components/PriceInput/PriceInput';

const Price = () => {
  const [productPrice, setProductPrice] = useState(0);

  const handlePrice = e => {
    setProductPrice(e.target.value);
  };

  const [discountBtn, setDiscountBtn] = useState('web');

  const handleDiscount = (event, newAlignment) => {
    setDiscountBtn(newAlignment);
  };

  const [measure, setMeasure] = useState('원');

  const handleMeasure = e => {
    setMeasure(e.target.value);
  };

  const [discountPrice, setDiscountPrice] = useState(0);

  const handleDiscountPrice = e => {
    setDiscountPrice(e.target.value);
  };

  return (
    <PriceContainer>
      <RegisterTitle title="판매가" />
      <PriceInput
        title="판매가"
        priceHandler={e => {
          handlePrice(e);
        }}
      />
      <Discount>
        <span>할인</span>
        <ToggleButtonGroup
          color="primary"
          value={discountBtn}
          exclusive
          onChange={handleDiscount}
          aria-label="Platform"
        >
          <ToggleButton
            value="discount"
            style={{
              minWidth: '121px',
              maxHeight: '30px',
            }}
          >
            설정함
          </ToggleButton>
          <ToggleButton
            value=""
            style={{
              minWidth: '121px',
              maxHeight: '30px',
            }}
          >
            설정안함
          </ToggleButton>
        </ToggleButtonGroup>
      </Discount>
      {discountBtn === 'discount' && (
        <>
          <DiscountInput>
            <span>할인 단위</span>
            <input
              onChange={e => {
                handleDiscountPrice(e);
              }}
            />
            <select onChange={handleMeasure}>
              <option value="원">원</option>
              <option value="%">%</option>
            </select>
          </DiscountInput>

          <DiscountPrice>
            {measure === '원' ? (
              <>
                <span>할인된 가격</span>
                <div>
                  총 {(productPrice - discountPrice).toLocaleString()}원 (
                  {(discountPrice - 0).toLocaleString()}원 할인된 가격)
                </div>
              </>
            ) : (
              <>
                <span>할인된 가격</span>
                <div>
                  총{' '}
                  {(
                    productPrice -
                    (productPrice * discountPrice) / 100
                  ).toLocaleString()}
                  원 ({((productPrice * discountPrice) / 100).toLocaleString()}
                  원 할인된 가격)
                </div>
              </>
            )}
          </DiscountPrice>
        </>
      )}
    </PriceContainer>
  );
};

export default Price;

const PriceContainer = styled.div`
  span {
    font-size: 13px;
    ${variables.subMenuTitleWidth}
  }
`;

const Discount = styled.div`
  ${variables.registerBox}
  border-top: 0;
`;

const DiscountPrice = styled.div`
  ${variables.registerBox}
  border-top: none;
`;

const DiscountInput = styled.div`
  ${variables.registerBox}
  border-bottom: none;

  > input {
    width: 200px;
    height: 100%;
    background-color: ${props => props.theme.backgroundGray};
    border: 1px solid ${props => props.theme.lineGray};
    outline: none;
  }

  > select {
    height: 27px;
    line-height: 28px;
    padding: 1px 10px;
    border: 1px solid ${props => props.theme.lineGray};
    border-left: none;
    background-color: ${props => props.theme.backgroundGray};
    font-size: 13px;
  }
`;
