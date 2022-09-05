import React, { useState, useEffect } from 'react';
import S from './Styled.ProductList';
import SearchInfo from './SearchInfo';
import SearchResult from './SearchResult';
import axios from 'axios';

const ProductList = () => {
  const [info, setInfo] = useState({
    productName: '',
    productCategory: '',
    productDate: '',
    productStatus: '',
  });

  const [showResult, setShowResult] = useState({});
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    axios.get('/data/MockData.json').then(res => {
      setSearchData(res.data);
      setShowResult(res.data);
    });
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onSearch = e => {
    const filterData = searchData.filter(row =>
      row.productName.includes(info.productName)
    );
    setShowResult(filterData);
  };

  return (
    <S.Productlist>
      <S.Wraper>
        <S.Category>홈 &gt; 상품관리 &gt; 상품목록</S.Category>
        <S.CategoryTitle>상품 목록</S.CategoryTitle>
        <S.SearchBox>
          <S.SearchTitle>상품찾기</S.SearchTitle>
          <SearchInfo onChange={onChange} onKeyPress={onKeyPress} />
          <S.SearchButton onClick={onSearch}>검색</S.SearchButton>
        </S.SearchBox>
        {searchData && <SearchResult searchData={showResult} />}
      </S.Wraper>
    </S.Productlist>
  );
};

export default ProductList;
