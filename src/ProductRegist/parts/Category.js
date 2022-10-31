import React from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../components/RegisterTitle/RegisterTitle';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Category = ({ data, setData }) => {
  const CATEGORY_LIST = [
    '식품',
    '패션/잡화',
    '뷰티',
    '식물',
    '홈데코',
    '스포츠/레저',
  ];

  const handleChange = event => {
    setData({ ...data, category: event.target.value });
  };

  return (
    <CategoryContainer>
      <RegisterTitle title="카테고리 선택" />

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.category}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem disabled value="">
              <em>카테고리를 설정해 주세요</em>
            </MenuItem>
            {CATEGORY_LIST.map((element, i) => {
              return (
                <MenuItem key={i} value={element}>
                  {element}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    font-size: 13px;
  }

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 1px solid #dadada;
    border-radius: 0;
    outline: none;
  }
`;
