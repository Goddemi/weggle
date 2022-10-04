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
        <S.BtnBox>
          <S.SearchBtn>초기화</S.SearchBtn>
          <S.SearchBtn>검색</S.SearchBtn>
        </S.BtnBox>
      </S.SearchTableBox>
    </>
  );
};

const SEARCH_TABLE_DATA = [
  {
    id: 1,
    title: '검색어',
    input: (
      <>
        <S.SelectBtn>
          <option>주문번호</option>
          <option>닉네임</option>
          <option>송장번호</option>
        </S.SelectBtn>
        <S.InputBoxBorder />
      </>
    ),
  },
  {
    id: 2,
    title: '기간', // DATA 받고 id 값들에 따라 카테고리가 보이게 할예정
    input: (
      <>
        <S.SelectBtn>
          <option>주문일</option>
          <option>?</option>
          <option>?</option>
          <option>?</option>
        </S.SelectBtn>
        <S.InputBoxBorder type="date" />
        ~
        <S.InputBoxBorder type="date" />
      </>
    ),
  },
  {
    id: 3,
    title: '주문상태',
    input: (
      <S.CheckBoxContainer>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="전체" />
          전체
        </S.CheckBox>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="배송준비중" />
          배송준비중
        </S.CheckBox>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="배송중" />
          배송중
        </S.CheckBox>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="배송완료" />
          배송완료
        </S.CheckBox>
      </S.CheckBoxContainer>
    ),
  },
  {
    id: 4,
    title: 'cs주문상태',
    input: (
      <S.CheckBoxContainer>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="전체" />
          전체
        </S.CheckBox>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="전체" />
          취소
        </S.CheckBox>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="전체" />
          교환
        </S.CheckBox>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="전체" />
          반품
        </S.CheckBox>
        <S.CheckBox>
          <S.InputBox type="checkbox" value="전체" />
          환불
        </S.CheckBox>
      </S.CheckBoxContainer>
    ),
  },
];

export default OrderSearch;
