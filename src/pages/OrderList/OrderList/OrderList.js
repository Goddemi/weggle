import React, { useState, useEffect } from 'react';
import S from './OrderListStyle';
import axios from 'axios';
import OrderDetail from './OrderDetail/OrderDetail';
import { ORDER_TAB_DATA } from './OrderListTabData';
import OrderListTab from './OrderListTab/OrderListTab';

const OrderList = () => {
  const [orderData, setOrderData] = useState([]);
  const [hover, setHover] = useState(undefined);

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios.get('/data/OrderListData.json').then(res => setOrderData(res.data));
  }, []);

  const numPages = Math.ceil(orderData.length / limit);

  let orderNum = {};
  const rowSpan = orderData.reduce((result, item, key) => {
    if (orderNum[item.orderNum] === undefined) {
      orderNum[item.orderNum] = key;
      result[key] = 1;
    } else {
      const firstIndex = orderNum[item.orderNum];
      if (
        firstIndex === key - 1 ||
        (item.orderNum === orderData[key - 1].orderNum && result[key - 1] === 0)
      ) {
        result[firstIndex]++;
        result[key] = 0;
      } else {
        result[key] = 1;
        orderNum[item.orderNum] = key;
      }
    }
    return result;
  }, []);

  const handleHover = colHoverNthChild => {
    setHover(colHoverNthChild);
  };

  return (
    <>
      <OrderListTab limit={limit} setLimit={setLimit} orderData={orderData} />

      <S.SearchTableBox>
        <S.SearchTable colHoverNthChild={hover}>
          <tbody>
            <S.TableTr>
              <S.TableTd>
                <S.InputBox type="checkbox" />
              </S.TableTd>
              {ORDER_TAB_DATA.map(tab => (
                <S.TableTap key={tab.id}>{tab.title}</S.TableTap>
              ))}
            </S.TableTr>
            {orderData.slice(offset, offset + limit).map((order, i) => {
              return (
                <S.TableTr key={order.id}>
                  {rowSpan[i] > 0 && (
                    <S.TableTd rowSpan={rowSpan[i]}>
                      <S.InputBox type="checkbox" />
                    </S.TableTd>
                  )}

                  {rowSpan[i] > 0 && (
                    <S.TableTh rowSpan={rowSpan[i]}>
                      <S.orderDateBox>
                        <S.OrderSpan> {order.orderNum}</S.OrderSpan>
                        <S.OrderSpan> {order.orderDate}</S.OrderSpan>
                      </S.orderDateBox>
                    </S.TableTh>
                  )}

                  <OrderDetail order={order} handleHover={handleHover} />

                  <S.TableTd>
                    <S.OrderSpan>{order.orderPrice}</S.OrderSpan>
                  </S.TableTd>

                  <S.TableTd>
                    <S.OrderSpan>{order.orderQuantity}</S.OrderSpan>
                  </S.TableTd>

                  {rowSpan[i] > 0 && (
                    <>
                      <S.TableTd rowSpan={rowSpan[i]}>
                        {order.orderCondition}
                      </S.TableTd>

                      <S.TableTd rowSpan={rowSpan[i]}>
                        <S.InputBox />
                      </S.TableTd>

                      <S.TableTd rowSpan={rowSpan[i]}>
                        {order.orderShipping}
                      </S.TableTd>

                      <S.TableTd rowSpan={rowSpan[i]}>
                        {order.orderInfo}
                        {order.orderAddress}
                        {order.orderZipcode}
                      </S.TableTd>

                      <S.TableTd rowSpan={rowSpan[i]}>
                        {order.paymentMethod}
                        {order.orderBank}
                      </S.TableTd>
                    </>
                  )}
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

export default OrderList;
