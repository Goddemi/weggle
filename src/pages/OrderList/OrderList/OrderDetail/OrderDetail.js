import React from 'react';
import S from './OrderDetailStyle';

const OrderDetail = ({ order }) => {
  return (
    <S.TableTd>
      {order.orderDetail.map(commodity => {
        return (
          <S.OrderCommodityContainer key={commodity.id}>
            <S.OrderCommodityBox>
              <input type="checkbox" />
              <S.OrderImage src={commodity.orderPicture} alt="orderPicture" />
              <S.OrderCommodityDetail>
                <S.OrderGraySpan>{commodity.orderNum}</S.OrderGraySpan>
                <S.OrderSpan>{commodity.title}</S.OrderSpan>
                {commodity.addOn.map((OrderAddOn, i) => {
                  return (
                    <S.AddonBox key={i}>
                      {OrderAddOn.color && (
                        <S.OrderGraySpan>{OrderAddOn.color}</S.OrderGraySpan>
                      )}
                      {OrderAddOn.addOn && (
                        <S.OrderGraySpan>{OrderAddOn.addOn}</S.OrderGraySpan>
                      )}
                      {OrderAddOn.packaging && (
                        <S.OrderGraySpan>
                          {OrderAddOn.packaging}
                        </S.OrderGraySpan>
                      )}
                    </S.AddonBox>
                  );
                })}
              </S.OrderCommodityDetail>
            </S.OrderCommodityBox>
          </S.OrderCommodityContainer>
        );
      })}
    </S.TableTd>
  );
};

export default OrderDetail;
