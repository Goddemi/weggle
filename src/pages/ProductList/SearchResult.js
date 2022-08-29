/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import S from './Styled.ProductList';
// import styled from 'styled-components';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';

import Box from '@mui/material/Box';

const SearchResult = Data => {
  const [searchData, setSearchData] = useState(Data);

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
