import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Category from './parts/Category';
import Price from './parts/Price';
import ProductName from './parts/ProductName';
import ImgUpload from './parts/ImgUpload/ImgUpload';
import VideoUpload from './parts/VideoUpload';
import Detail from './parts/Detail';
import ExchangeRule from './parts/ExchangeRule';
// import Option from './parts/Option/Option';

const ProductRegist = () => {
  const [data, setData] = useState({
    image_list: '["30a3cf0b6b712fa6c404e3db14736073.png"]',
    image_detail_list: '["65cab723555afbf633887d4e6de09b29.png"]',
    filename_video: '23a98b6d13aae783a777177062e01f6d.m3u8',
    name: '해블랑표333333',
    sale_type: 'onsale',
    category: '',
    detail_info: '상품소개22222',
    price_original: '10000',
    price_discount: '7000',
    discount_rate: '30',
    cancel_info: '교환반품상세22222',
    option_list: '[{"option_id":101,"name":"옵션101","option_price":"0"}]',
    faq_list: '[{"id":1,"title":"질문1","content":"답변1"}]',
    video_content: '상품 내용 추가',
  });

  const dataFetch = () => {
    axios.post('http://localhost:3457/api/product', data).then(response => {});
  };

  return (
    <Container>
      <PageLocation>홈 - 상품관리 - 상품등록 </PageLocation>
      <PageTitle> 상품등록 </PageTitle>

      <RegisterContainer>
        <Category data={data} setData={setData} />
        <ProductName data={data} setData={setData} />
        <Price data={data} setData={setData} />
        {/* <Option /> */}
        <ImgUpload data={data} setData={setData} />
        <VideoUpload width={400} height={300} />
        <Detail />
        <ExchangeRule />
      </RegisterContainer>

      <SaveButton>
        <button onClick={dataFetch}>저장하기</button>
      </SaveButton>
    </Container>
  );
};

export default ProductRegist;

const Container = styled.div`
  background-color: ${props => props.theme.backgroundGray};
  padding: 50px;
`;

const PageLocation = styled.div`
  padding-left: 10px;
  margin-bottom: 30px;
  font-size: 15px;
  color: gray;
`;

const PageTitle = styled.div`
  padding-left: 10px;
  margin-bottom: 30px;
`;

const RegisterContainer = styled.div`
  > div {
    margin-bottom: 20px;
    background-color: #ffffff;
  }
`;

const SaveButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 150px;
    height: 30px;
    background-color: #ff0073;
    color: white;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
