import React from 'react';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import MainImage from './Components/MainImage';
import SubImage from './Components/SubImage';

const ImgUpload = () => {
  return (
    <ImgContainer>
      <RegisterTitle title="상품이미지" />

      <ImgContent>
        <span>대표 이미지</span>
        <MainImage />
      </ImgContent>

      <ImgContent>
        <span>서브 이미지</span>
        <SubImage />
      </ImgContent>
    </ImgContainer>
  );
};

export default ImgUpload;

const ImgContainer = styled.div``;

const ImgContent = styled.div`
  ${variables.registerBox('', '')}

  span {
    ${variables.subMenuTitleWidth}
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    padding: 6px 12px;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;
