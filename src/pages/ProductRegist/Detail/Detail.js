import React from 'react';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import styled from 'styled-components';
import variables from '../../../styles/variables';

const Detail = () => {
  return (
    <DetailContainer>
      <RegisterTitle title="상품상세 정보" />
      <DetailContent />
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div``;

const DetailContent = styled.div`
  ${variables.registerBox('', '')}
  justify-content: center;
`;
