import React, { useState, useEffect } from 'react';
import S from './OrderListStyle';
import axios from 'axios';
import OrderDetail from './OrderDetail/OrderDetail';

const OrderList = () => {
  const [orderData, setOrderData] = useState([]);

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios.get('/data/OrderListData.json').then(res => setOrderData(res.data));
  }, []);

  const numPages = Math.ceil(orderData.length / limit);

  return (
    <>
      <S.TableResult>
        <S.TabSpan>조회결과</S.TabSpan>
        <S.TabSpan>{`(총 : ${orderData.length}건)`}</S.TabSpan>
      </S.TableResult>
      {/* TODO : TableTab 컴포넌트 분리 예정 */}
      <S.TableTab>
        <S.TabSpan>신규주문</S.TabSpan>
        <S.TabSpan>입금대기</S.TabSpan>
        <S.TabSpan>결제완료</S.TabSpan>
        <S.TabSpan>배송준비중</S.TabSpan>
        <S.TabSpan>배송중</S.TabSpan>
        <S.TabSpan>배송완료</S.TabSpan>
      </S.TableTab>
      <S.TableTab>
        <S.TabSpan>발송처리</S.TabSpan>
        <S.TabSpan>배송준비 처리</S.TabSpan>
        <S.TabSpan>입금확인 처리</S.TabSpan>
        <S.TabSpan>기타주문 처리</S.TabSpan>
        <S.TabSpan>판매 취소</S.TabSpan>
        <S.TabSpan>반품 처리</S.TabSpan>
        <S.TabSpan>교환 처리</S.TabSpan>

        <div>
          <S.TabSpan>주문서출력</S.TabSpan>
          <S.TabSpan>엑셀로 받기</S.TabSpan>
          <label>
            페이지 당 표시할 게시물 수:&nbsp;
            <select
              type="number"
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
      </S.TableTab>
      <S.SearchTableBox>
        <S.SearchTable>
          <tbody>
            <S.TableTr>
              <S.TableTd>
                <S.InputBox type="checkbox" />
              </S.TableTd>
              {/* 탭에 뭐가 들어가야하는지.....? */}
              {ORDER_TAB_DATA.map(tab => (
                <S.TableTd key={tab.id}>{tab.title}</S.TableTd>
              ))}
            </S.TableTr>
            {orderData.slice(offset, offset + limit).map(order => {
              return (
                <S.TableTr key={order.id}>
                  <S.TableTd>
                    <S.InputBox type="checkbox" />
                  </S.TableTd>
                  <S.TableTh>
                    <S.orderDateBox>
                      <S.OrderSpan> {order.orderNum}</S.OrderSpan>
                      <S.OrderSpan> {order.orderDate}</S.OrderSpan>
                    </S.orderDateBox>
                  </S.TableTh>

                  <OrderDetail order={order} />

                  <S.TableTd>{order.orderPrice}</S.TableTd>
                  <S.TableTd>{order.orderCondition}</S.TableTd>
                  <S.TableTd>{order.orderAudit}</S.TableTd>

                  <S.TableTd>{order.orderPriceCondition}</S.TableTd>
                  <S.TableTd>{order.orderRegistration}</S.TableTd>
                  <S.TableTd>{order.orderRegistrationModify}</S.TableTd>
                </S.TableTr>
              );
            })}
          </tbody>
        </S.SearchTable>

        <S.PageBtnBox>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <S.PageBtn
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? 'page' : null}
              >
                {i + 1}
              </S.PageBtn>
            ))}
        </S.PageBtnBox>
      </S.SearchTableBox>
    </>
  );
};

const ORDER_TAB_DATA = [
  {
    id: 1,
    title: '주문번호/시각',
  },
  {
    id: 2,
    title: '주문상품',
  },
  {
    id: 3,
    title: '상품금액',
  },
  {
    id: 4,
    title: '판매상태',
  },
  {
    id: 5,
    title: '제품심사',
  },
  {
    id: 6,
    title: '상태',
  },
  {
    id: 7,
    title: '등록일',
  },
  {
    id: 8,
    title: '수정일',
  },

  {
    id: 9,
    title: '비고',
  },
];

export default OrderList;
