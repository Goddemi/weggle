import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../components/RegisterTitle/RegisterTitle';
import variables from '../../styles/variables';
import Category from './Category/Category';
import Price from './Price/Price';
import Option from './Option/Option';
import ImgUpload from './ImgUpload/ImgUpload';
import VideoUpload from './VideoUpload/VideoUpload';
import Detail from './Detail/Detail';
import ExchangeRule from './ExchangeRule.js/ExchangeRule';

const ProductRegist = () => {
  const [data, setData] = useState({
    image_list: '["30a3cf0b6b712fa6c404e3db14736073.png"]',
    image_detail_list: '["65cab723555afbf633887d4e6de09b29.png"]',
    filename_video: '23a98b6d13aae783a777177062e01f6d.m3u8',
    name: '해블랑표333333',
    sale_type: 'onsale',
    category: '1',
    detail_info: '상품소개22222',
    price_original: '10000',
    price_discount: '7000',
    discount_rate: '30',
    cancel_info: '교환반품상세22222',
    option_list: '[{"option_id":101,"name":"옵션101","option_price":"0"}]',
    faq_list: '[{"id":1,"title":"질문1","content":"답변1"}]',
    video_content: '상품 내용 추가',
  });

  return (
    <Container>
      <PageLocation>홈 - 상품관리 - 상품등록 </PageLocation>
      <PageTitle> 상품등록 </PageTitle>
      <RegisterContainer>
        <Category />
        <ProductName>
          <RegisterTitle title="상품명" />
          <NameContent>
            <input placeholder="상품명의 정확한 정보만 입력해 주세요. (최소 10자)" />
          </NameContent>
        </ProductName>
        <Price />
        <Option />
        <ImgUpload />
        <VideoUpload width={400} height={300} />
        <Detail />
        <ExchangeRule />
      </RegisterContainer>

      <SaveButton>
        <button>저장하기</button>
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

const ProductName = styled.div``;

const NameContent = styled.div`
  ${variables.registerBox}

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
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
