import React, { useState } from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';
import Input from '@mui/material/Input';
import { NativeSelect } from '@mui/material';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

const SearchInfo = props => {
  const { onChange, onKeyPress } = props;
  const [value, setValue] = useState(dayjs());

  // console.log(value);
  return (
    <S.SearchInfo>
      {SEARCH_DATA.map(data => {
        const { id, codeName, name, type } = data;
        return (
          <S.SearchTable key={id}>
            <S.TableTitle>{name}</S.TableTitle>
            <S.TableField>
              {codeName === 'productName' && (
                <Input
                  name={codeName}
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                  fullWidth
                />
              )}
              {codeName === 'productCategory' && (
                <NativeSelect
                  id="select"
                  onChange={onChange}
                  fullWidth
                  name="productCategory"
                >
                  {CATEGORY_DATA.map(data => {
                    return (
                      <option key={data.id} value={data.value}>
                        {data.name}
                      </option>
                    );
                  })}
                </NativeSelect>
              )}
              {codeName === 'productDate' && (
                <TextField
                  type="date"
                  name="productDate"
                  onChange={onChange}
                  fullWidth
                />
              )}
              {codeName === 'productStatus' && (
                <NativeSelect
                  id="select"
                  onChange={onChange}
                  fullWidth
                  name="productStatus"
                >
                  {SELL_STATUS_DATA.map(data => {
                    return (
                      <option key={data.id} value={data.value}>
                        {data.value}
                      </option>
                    );
                  })}
                </NativeSelect>
              )}
            </S.TableField>
          </S.SearchTable>
        );
      })}
    </S.SearchInfo>
  );
};

export default SearchInfo;

const SEARCH_DATA = [
  {
    id: 1,
    type: 'text',
    codeName: 'productName',
    name: '상품명검색',
  },
  {
    id: 2,
    type: 'select',
    codeName: 'productCategory',
    name: '상품 카테고리',
  },
  {
    id: 3,
    type: 'date',
    codeName: 'productDate',
    name: '상품등록일',
  },
  {
    id: 4,
    type: 'select',
    codeName: 'productStatus',
    name: '판매상태',
  },
];

const CATEGORY_DATA = [
  {
    id: 1,
    value: '',
    name: 'ALL',
  },
  {
    id: 2,
    value: '카테고리1',
    name: '카테고리1',
  },
  {
    id: 3,
    value: '카테고리2',
    name: '카테고리2',
  },
  {
    id: 4,
    value: '카테고리3',
    name: '카테고리3',
  },
  {
    id: 5,
    value: '카테고리4',
    name: '카테고리4',
  },
  {
    id: 6,
    value: '카테고리5',
    name: '카테고리5',
  },
];

const SELL_STATUS_DATA = [
  { id: 1, value: '판매중' },
  { id: 2, value: '안판매중' },
  { id: 3, value: '판매중단' },
];

// style 컴포넌트
const S = {};
S.SearchInfo = styled.div`
  margin: 0 30px 0 30px;
  width: 100%;
  border: 0.5px solid #dadada;
`;
S.SearchTable = styled.div`
  display: flex;
`;

S.TableTitle = styled.div`
  ${variables.flex()}
  width: 150px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #1c1c1e;
  border: 0.5px solid #dadada;
  background-color: #ededed;
`;

S.TableInput = styled.input`
  ${variables.flex()}
  width:100%;
  height: 40px;
  text-indent: 10px;
`;

S.TableCheck = styled.input`
  ${variables.flex()}
  height: 60px;
  text-indent: 10px;
`;

S.TableField = styled.div`
  ${variables.flex()}
  width:100%;
  text-indent: 10px;
  padding: 20px;
  border: 0.5px solid #dadada;
`;
