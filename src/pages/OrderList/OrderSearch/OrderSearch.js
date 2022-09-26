import React from 'react';
import S from './OrderSearchStyle';

const OrderSearch = () => {
  return (
    <>
      <S.SearchTableHeader>
        <S.SearchTabletitle>상품찾기</S.SearchTabletitle>
      </S.SearchTableHeader>
      <S.SearchTableBox>
        <S.SearchTable>
          <tbody>
            {SEARCH_TABLE_DATA.map(table => {
              return (
                <S.TableTr key={table.id}>
                  <S.TableTh>{table.title}</S.TableTh>
                  <S.TableTd>{table.input}</S.TableTd>
                </S.TableTr>
              );
            })}
          </tbody>
        </S.SearchTable>
        <S.SearchBtn>검색</S.SearchBtn>
      </S.SearchTableBox>
    </>
  );
};

const SEARCH_TABLE_DATA = [
  {
    id: 1,
    title: '상품명검색',
    input: <S.InputBox />,
  },
  {
    id: 2,
    title: '상품명 카테고리', // DATA 받고 id 값들에 따라 카테고리가 보이게 할예정
    input: (
      <S.SelectBtn>
        <option>선택</option>
        <option>뷰티</option>
        <option>악세서리</option>
        <option>가구</option>
      </S.SelectBtn>
    ),
  },
  {
    id: 3,
    title: '상품 등록일',
    input: <S.InputBox type="date" />,
  },
  {
    id: 4,
    title: '판매상태',
    input: (
      <S.SelectBtn>
        <option>선택</option>
        <option>판매중</option>
        <option>판매중지</option>
        <option>판매중지(품절)</option>
      </S.SelectBtn>
    ),
  },
];

export default OrderSearch;
