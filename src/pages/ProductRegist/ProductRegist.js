import React from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../components/RegisterTitle/RegisterTitle';
import variables from '../../styles/variables';
import Category from './Category/Category';
import Price from './Price/Price';
import Option from './Option/Option';
import ImgUpload from './ImgUpload/ImgUpload';
import VideoUpload from './VideoUpload/VideoUpload';
import Detail from './Detail/Detail';

const ProductRegist = () => {
  return (
    <Container>
      <PageLocation>홈 - 상품관리 - 상품등록 </PageLocation>
      <PageTitle> 상품등록 </PageTitle>
      <RegisterContainer>
        <Category />

        <ProductName>
          <RegisterTitle title="상품명" />
          <NameContent>
            <input placeholder="상품명의 정확한 정보만 입력해주세요. (최소 10자)" />
          </NameContent>
        </ProductName>

        <Price />

        <Option />

        <ImgUpload />

        <VideoUpload width={400} height={300} />

        <Detail />

        <ExchangeRule>
          <RegisterTitle title="교환/반품 정책" />
          <ExchangeContent />
        </ExchangeRule>
      </RegisterContainer>
    </Container>
  );
};

export default ProductRegist;

const Container = styled.div`
  background-color: ${props => props.theme.backgroundGray};
  padding: 50px;
`;

const PageLocation = styled.div``;

const PageTitle = styled.div``;

const RegisterContainer = styled.div`
  > div {
    margin-bottom: 20px;
    background-color: #ffffff;
  }
`;
const CategoryContent = styled.div`
  ${variables.registerBox}
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

const VideoContent = styled(CategoryContent)``;

const DetailContent = styled(CategoryContent)``;

const ExchangeRule = styled.div``;

const ExchangeContent = styled(CategoryContent)``;
