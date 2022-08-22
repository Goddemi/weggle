import React, { useState } from 'react';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Category = () => {
  const CATEGORY_LIST = [
    '식품',
    '패션/잡화',
    '뷰티',
    '식물',
    '홈데코',
    '스포츠/레저',
  ];

  const [categorySelect, setCategorySelect] = useState('');

  const handleChange = event => {
    setCategorySelect(event.target.value);
  };
  return (
    <div>
      <RegisterTitle title="카테고리 선택" />

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categorySelect}
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
    </div>
  );
};

export default Category;
