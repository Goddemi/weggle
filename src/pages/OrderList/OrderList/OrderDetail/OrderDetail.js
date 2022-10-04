import React from 'react';
import S from './OrderDetailStyle';

const OrderDetail = ({ product }) => {
  return (
    <S.TableTd>
      <S.OrderCommodityBox>
        <input type="checkbox" />
        <S.OrderImage src="/images/people.jpg" alt="orderPicture" />
        <S.OrderCommodityDetail>
          <S.OrderGraySpan>{product.uid}</S.OrderGraySpan>
          <S.OrderSpan>{product.name}</S.OrderSpan>
          <S.OrderGraySpan>옵션: {product.option_names}</S.OrderGraySpan>
        </S.OrderCommodityDetail>
      </S.OrderCommodityBox>
    </S.TableTd>
  );
};

export default OrderDetail;
