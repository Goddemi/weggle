import React from 'react';
import OrderList from './OrderList/OrderList';
import OrderSearch from './OrderSearch/OrderSearch';
import S from './OrderPageStyle';

const OrderPage = () => {
  return (
    <S.OrderPageContainer>
      <S.OrderPageHeaderBox>
        <S.OrderNav>{'홈 > 상품관리 > 상품목록'}</S.OrderNav>
        {/*TODO 상품목록에만 색깔 줄것.*/}
        <S.OrderListTitle>상품목록</S.OrderListTitle>
      </S.OrderPageHeaderBox>

      <OrderSearch />

      <OrderList />
    </S.OrderPageContainer>
  );
};

export default OrderPage;
