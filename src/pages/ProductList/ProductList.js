import React, { useState } from 'react';
import S from './Styled.ProductList';
import SearchInfo from './SearchInfo';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const ProductList = () => {
  const [info, setInfo] = useState({
    productName: '',
    productCategory: '',
    productDate: '',
    productStatus: '',
  });
  const [searchData, setSearchData] = useState('');

  const onChange = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const onSearch = () => {
    axios.get('/data/MockData.json').then(res => {
      setSearchData(res.data);
    });
    // .catch(rej => console.log('실패'));
  };
  //
  const RenderDate = props => {
    const { hasFocus, value } = props;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

    React.useLayoutEffect(() => {
      if (hasFocus) {
        const input = buttonElement.current?.querySelector('input');
        input?.focus();
      } else if (rippleRef.current) {
        // Only available in @mui/material v5.4.1 or later
        rippleRef.current.stop({});
      }
    }, [hasFocus]);

    return (
      <strong>
        {value?.getFullYear() ?? ''}
        <Button
          component="button"
          ref={buttonElement}
          touchRippleRef={rippleRef}
          variant="contained"
          size="small"
          style={{ marginLeft: 16 }}
          // Remove button from tab sequence when cell does not have focus
          tabIndex={hasFocus ? 0 : -1}
          onKeyDown={event => {
            if (event.key === ' ') {
              // Prevent key navigation when focus is on button
              event.stopPropagation();
            }
          }}
        >
          Open
        </Button>
      </strong>
    );
  };

  RenderDate.propTypes = {
    /**
     * If true, the cell is the active element.
     */
    hasFocus: PropTypes.bool.isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: PropTypes.instanceOf(Date),
  };
  //

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
  console.log('search Data : ', searchData);

  return (
    <S.Productlist>
      <S.Wraper>
        <S.Category>홈 &gt; 상품관리 &gt; 상품목록</S.Category>
        <S.CategoryTitle>상품 목록</S.CategoryTitle>
        <S.SearchBox>
          <S.SearchTitle>상품찾기</S.SearchTitle>
          <SearchInfo onChange={onChange} />
          <S.SearchButton onClick={onSearch}>검색</S.SearchButton>
        </S.SearchBox>
        {searchData && (
          <S.SearchResult>
            <S.SearchTitle>
              조회결과 &nbsp;
              <S.ResultLength>(총:{searchData.length}건)</S.ResultLength>
            </S.SearchTitle>
            <S.ListDelete>삭제</S.ListDelete>
            <S.ResultTable>
              <S.DataGridField>
                <Box
                  sx={{ height: 400, width: '100%', overflowWrap: 'normal' }}
                >
                  <DataGrid
                    rows={searchData}
                    columns={columns}
                    getRowHeight={() => 'auto'}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    style={{ overflowWrap: 'break-word' }}
                  />
                </Box>
              </S.DataGridField>
            </S.ResultTable>
          </S.SearchResult>
        )}
      </S.Wraper>
    </S.Productlist>
  );
};

export default ProductList;
