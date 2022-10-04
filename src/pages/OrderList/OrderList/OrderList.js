import React, { useState, useEffect } from 'react';
import S from './OrderListStyle';
import axios from 'axios';
import { ORDER_TAB_DATA } from './OrderListTabData';
import OrderListBody from './OrderListBody';
import OrderListTab from './OrderListTab/OrderListTab';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import './OrderListScss.scss';

const OrderList = () => {
  const [orderData, setOrderData] = useState([]);

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [checkedList, setCheckedList] = useState([]);

  const handleAllCheck = e => {
    if (e.target.checked) {
      const idArray = [];
      orderData.forEach(el => idArray.push(el.orderNum));
      setCheckedList(idArray);
    } else {
      setCheckedList([]);
    }
  };

  const onCheckedElement = e => {
    e.target.checked
      ? setCheckedList([...checkedList, e.target.value])
      : setCheckedList(
          checkedList.filter(element => element !== e.target.value)
        );
  };

  const offset = (page - 1) * limit;

  useEffect(() => {
    axios.get('/data/Result_2.json').then(res => setOrderData(res.data));
  }, []);

  // http://52.78.124.248:3457/api/Order/list

  const numPages = Math.ceil(orderData.length / limit);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <>
      <OrderListTab limit={limit} setLimit={setLimit} orderData={orderData} />

      <S.SearchTableBox>
        <S.SearchTable>
          <thead>
            <S.TableTr>
              <S.TableTd>
                <Checkbox
                  {...label}
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600],
                    },
                  }}
                  onChange={e => handleAllCheck(e)}
                  checked={
                    checkedList.length === orderData.length ? true : false
                  }
                />
              </S.TableTd>
              {ORDER_TAB_DATA.map(tab => (
                <S.TableTap key={tab.id}>{tab.title}</S.TableTap>
              ))}
            </S.TableTr>
          </thead>

          <OrderListBody
            orderData={orderData}
            offset={offset}
            limit={limit}
            onCheckedElement={onCheckedElement}
            checkedList={checkedList}
          />
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
