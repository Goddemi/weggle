import React, { useState } from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';
import Input from '@mui/material/Input';
import { NativeSelect } from '@mui/material';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchInfo = props => {
  const { onChange, onKeyPress } = props;
  const [value, setValue] = useState(null);
  console.log(value.$d);

  return (
    <S.SearchInfo>
      {SEARCH_DATA.map(data => {
        const { id, codeName, name, type } = data;
        return (
          <S.SearchTable key={id}>
            <S.TableTitle>{name}</S.TableTitle>
            <S.TableField>
              {type === 'text' && (
                <Input
                  name={codeName}
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                  fullWidth
                />
              )}
              {type === 'select' && (
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
              {type === 'date' && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={value}
                    onChange={newValue => {
                      setValue(newValue);
                    }}
                    showToolbar={true}
                    // inputFormat="YYYY-MM-DD"
                    renderInput={params => <TextField {...params} />}
                    className="hello"
                  />
                </LocalizationProvider>
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
    type: 'text',
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
