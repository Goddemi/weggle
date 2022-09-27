import React from 'react';
import S from './OrderDetailStyle';

const OrderDetail = ({ order }) => {
  return (
    <S.TableTd>
      <S.OrderCommodityBox>
        <input type="checkbox" />
        <S.OrderImage src={order.orderPicture} alt="orderPicture" />
        <S.OrderCommodityDetail>
          <S.OrderGraySpan>{order.orderNum}</S.OrderGraySpan>
          <S.OrderSpan>{order.title}</S.OrderSpan>
          {order.addOn.map((OrderAddOn, i) => {
            return (
              <S.AddonBox key={i}>
                {OrderAddOn.color && (
                  <S.OrderGraySpan>{OrderAddOn.color}</S.OrderGraySpan>
                )}
                {OrderAddOn.addOn && (
                  <S.OrderGraySpan>{OrderAddOn.addOn}</S.OrderGraySpan>
                )}
                {OrderAddOn.packaging && (
                  <S.OrderGraySpan>{OrderAddOn.packaging}</S.OrderGraySpan>
                )}
              </S.AddonBox>
            );
          })}
        </S.OrderCommodityDetail>
      </S.OrderCommodityBox>
    </S.TableTd>
  );
};

export default OrderDetail;
