/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import S from './Styled.ProductList';
// import styled from 'styled-components';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';

import Box from '@mui/material/Box';

const SearchResult = Data => {
  const [searchData, setSearchData] = useState(Data.searchData);

  const [selectionModel, setSelectionModel] = useState([]);

  useEffect(() => {
    setSearchData(Data.searchData);
  }, [Data.searchData]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: '상품명', width: 400 },
    { field: 'category', headerName: '카테고리', width: 130 },
    { field: 'price', headerName: '판매가', width: 130 },
    { field: 'status', headerName: '판매상태', width: 130 },
    { field: 'weggleInfo', headerName: '위글딜정보', width: 130 },
    { field: 'insertDate', headerName: '등록일', width: 130 },
    { field: 'updateDate', headerName: '수정일', width: 130 },
    { field: 'productExam', headerName: '제품심사', width: 130 },
    { field: 'etc', headerName: '비고', width: 130 },
  ];

  return (
    <S.SearchResult>
      <S.SearchTitle>
        조회결과 &nbsp;
        <S.ResultLength>(총:{searchData.length}건)</S.ResultLength>
      </S.SearchTitle>
      <S.ListDelete
        onClick={() => {
          const selectedIDs = new Set(selectionModel);
          setSearchData(r => r.filter(x => !selectedIDs.has(x.id)));
        }}
      >
        삭제
      </S.ListDelete>
      <S.ResultTable>
        <S.DataGridField>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={searchData}
              columns={columns}
              getRowHeight={() => 'auto'}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection={true}
              components={{
                Toolbar: GridToolbarExport,
              }}
              onSelectionModelChange={ids => {
                setSelectionModel(ids);
              }}
            />
          </Box>
        </S.DataGridField>
      </S.ResultTable>
    </S.SearchResult>
  );
};

export default SearchResult;

const res = [
  {
    id: 1,
    productName:
      '[주문제작]비건 매트 립스틱 7컬러입니다다다다다다다다다다다다다',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 2,
    productName: 'ddsadddddd',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 3,
    productName: '[주문제작]마법사 요술봉 뾰롱뾰롱',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 4,
    productName: '[주문제작]비건 피자 3판',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 5,
    productName: '[주문제작]에티오피아 커피',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 6,
    productName: '[주문제작]카페라떼 커피',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 7,
    productName: '[주문제작]아메리카노 커피',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 8,
    productName: '[주문제작]아이스아메리카노 커피',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 9,
    productName: '[주문제작]응애',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 10,
    productName: '[주문제작]10번째 기념 랜덤박스',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
  {
    id: 11,
    productName: '[주문제작]11은빼빼로',
    category: '뷰티',
    price: '원가:25000원',
    status: '판매중',
    weggleInfo: '심사중',
    insertDate: '2021/06/29',
    updateDate: '2021/07/01',
    productExam: '심사중',
    etc: '수정',
  },
];
