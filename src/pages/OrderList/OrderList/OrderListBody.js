import React, { Fragment, useState } from 'react';
import S from './OrderListStyle';
import OrderDetail from './OrderDetail/OrderDetail';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import './OrderListScss.scss';

const OrderListBody = ({
  orderData,
  offset,
  limit,
  onCheckedElement,
  checked,
  checkedList,
}) => {
  const [isOver, setIsOver] = useState(false);

  const mouseOverHanlder = () => {
    setIsOver(true);
  };
  const mouseOutHandler = () => {
    setIsOver(false);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const tbodies = orderData
    .slice(offset, offset + limit)
    .map((state, index) => {
      const productValue = Object.values(JSON.parse(state.option_list));
      const productRow = productValue.map((product, i) => {
        const stateInput = i === 0 && (
          <S.TableTd
            rowSpan={productValue.length + 1}
            onMouseOver={mouseOverHanlder}
            onMouseOut={mouseOutHandler}
          >
            <Checkbox
              {...label}
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
              value={state.order_no}
              checked={checkedList.includes(state.order_no) ? true : false}
              onChange={e => {
                onCheckedElement(e);
              }}
            />
          </S.TableTd>
        );
        const stateOrderNum = i === 0 && (
          <S.TableTd
            rowSpan={productValue.length + 1}
            onMouseOver={mouseOverHanlder}
            onMouseOut={mouseOutHandler}
          >
            <S.orderDateBox>
              <S.OrderSpan>{state.order_no}</S.OrderSpan>
              <S.OrderSpan>{state.created_time}</S.OrderSpan>
            </S.orderDateBox>
          </S.TableTd>
        );

        const waybillNumInput = i === 0 && (
          <S.TableTd
            rowSpan={productValue.length + 1}
            onMouseOver={mouseOverHanlder}
            onMouseOut={mouseOutHandler}
          >
            <S.ParcelBox>
              <S.SelectBtn>
                <option>택배사선택</option>
                <option>한진택배</option>
                <option>00택배</option>
                <option>01택배</option>
              </S.SelectBtn>
              <S.InputNum placeholder="송장번호" />
              <button>조회</button>
            </S.ParcelBox>
          </S.TableTd>
        );

        const stateShipping = i === 0 && (
          <S.TableTd
            rowSpan={productValue.length + 1}
            onMouseOver={mouseOverHanlder}
            onMouseOut={mouseOutHandler}
          >
            <S.OrderPaymentBox>
              <S.OrderSpan>택배</S.OrderSpan>
              <S.OrderGraySpan>
                {product.price_delivery.toLocaleString() + '원'}
              </S.OrderGraySpan>
            </S.OrderPaymentBox>
          </S.TableTd>
        );

        const stateAdress = i === 0 && (
          <S.TableTd
            rowSpan={productValue.length + 1}
            onMouseOver={mouseOverHanlder}
            onMouseOut={mouseOutHandler}
          >
            <S.OrderPaymentBox>
              <S.OrderSpan>{state.address}</S.OrderSpan>
              <S.OrderSpan> {state.address_detail}</S.OrderSpan>
              <S.OrderGraySpan>{'우)' + state.zipcode}</S.OrderGraySpan>
            </S.OrderPaymentBox>
          </S.TableTd>
        );

        const setPricetoNumber = JSON.parse(state.option_list).map(
          data => data.payment
        );

        const addPrice = setPricetoNumber.reduce((a, b) => a + b, 0);

        const totalPrice =
          state.shipping === '무료'
            ? addPrice
            : addPrice + Number(product.price_delivery);

        const statePayment = i === 0 && (
          <S.TableTd
            rowSpan={productValue.length + 1}
            onMouseOver={mouseOverHanlder}
            onMouseOut={mouseOutHandler}
          >
            <S.OrderPaymentBox>
              <S.SpanBox>
                <S.OrderSpan>결제금액</S.OrderSpan>
                <S.OrderSpan>{totalPrice.toLocaleString() + '원'}</S.OrderSpan>
              </S.SpanBox>
              <S.SpanBox>
                <S.OrderGraySpan>소계</S.OrderGraySpan>
                <S.OrderGraySpan>
                  {addPrice.toLocaleString() + '원'}
                </S.OrderGraySpan>
              </S.SpanBox>
              <S.SpanBox>
                <S.OrderGraySpan>배송비</S.OrderGraySpan>
                <S.OrderGraySpan>
                  {product.price_delivery.toLocaleString() + '원'}
                </S.OrderGraySpan>
              </S.SpanBox>
            </S.OrderPaymentBox>
          </S.TableTd>
        );

        const stateNote = i === 0 && (
          <S.TableTd
            rowSpan={productValue.length + 1}
            onMouseOver={mouseOverHanlder}
            onMouseOut={mouseOutHandler}
          >
            <S.OrderPaymentBox>
              <S.OrderSpan>닉네임: {state.nickname}</S.OrderSpan>
              <S.OrderSpan>이메일: {state.email}</S.OrderSpan>
              <S.OrderSpan>구매자 전화번호: {state.phone}</S.OrderSpan>
              <S.OrderSpan>수신인 전화번호: {state.address_phone}</S.OrderSpan>
            </S.OrderPaymentBox>
          </S.TableTd>
        );

        //         수령인: 이승규
        // 우편번호: 13355
        // 전화번호: 01041995926
        // 닉네임: 긴이름테스트트트트트
        // 이메일: dltmdrb1993@naver.com

        const switchStatus = () => {
          let condition = '';
          switch (product.status) {
            case 1:
              condition = '결제완료';
              break;
            case 2:
              condition = '배송정보 등록';
              break;
            case 3:
              condition = '배송중';
              break;
            case 4:
              condition = '배송완료';
              break;
            case 5:
              condition = '구매확정';
              break;

            default:
              break;
          }
          return condition;
        };

        return (
          <tr key={i}>
            {stateInput}
            {stateOrderNum}
            <OrderDetail product={product} />
            <S.TableTd>
              {Number(product.payment).toLocaleString() + '원'}
            </S.TableTd>
            <S.TableTd>{product.count}</S.TableTd>
            <S.TableTd>
              <S.OrderConditionSpan>{switchStatus()}</S.OrderConditionSpan>
            </S.TableTd>
            {waybillNumInput}
            {stateShipping}
            {stateAdress}
            {statePayment}
            {stateNote}
          </tr>
        );
      });
      return (
        <tbody
          key={index}
          className={isOver ? `hover-${state.name}` : state.name}
        >
          {productRow}
        </tbody>
      );
    });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{tbodies}</>;
};

export default OrderListBody;
