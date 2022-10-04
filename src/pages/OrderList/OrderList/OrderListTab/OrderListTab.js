import React from 'react';
import S from './OrderListTabStyle';
import { TOP_TABLE_DATA, MID_TABLE_DATA } from '../OrderListTabData';

const OrderListTab = ({ orderData, limit, setLimit }) => {
  return (
    <>
      <S.TableResult>
        <S.TabSpan>조회결과</S.TabSpan>
        <S.TabSpan>{`(총 : ${orderData.length}건)`}</S.TabSpan>
      </S.TableResult>
      <S.TableTab>
        {TOP_TABLE_DATA.map(tap => (
          <S.TabBtn key={tap.id}>{tap.title}</S.TabBtn>
        ))}
      </S.TableTab>
      <S.TableTab>
        {MID_TABLE_DATA.map(tap => (
          <S.TabBtn key={tap.id}>{tap.title}</S.TabBtn>
        ))}

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
    </>
  );
};

export default OrderListTab;
