import React, { useState } from 'react';
import styled from 'styled-components';
import handleResize from './Resize';

const MainImage = () => {
  const [mainImage, setMainImage] = useState([]);

  const handleMainImageUpload = async event => {
    let fileArr = event.target.files;
    let newImage = await handleResize(fileArr[0]);
    setMainImage([newImage]);
    event.target.value = '';
  };

  const MainImages = ({ imageList }) => {
    const removeImage = () => {
      setMainImage([]);

      return;
    };
    return imageList.map((image, i) => {
      return (
        <ImageBox key={i}>
          <img alt="main" src={image.url} />
          <button onClick={removeImage}>✕</button>
        </ImageBox>
      );
    });
  };

  return (
    <MainContainer>
      <MainImages imageList={mainImage} />
      {mainImage === [] ? (
        ''
      ) : (
        <label>
          +
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onChange={handleMainImageUpload}
          />
        </label>
      )}
    </MainContainer>
  );
};

export default MainImage;

const MainContainer = styled.div`
  display: flex;
`;

const ImageBox = styled.div`
  position: relative;
  margin-right: 20px;

  button {
    position: absolute;
    top: 0;
    right: 1px;
    background-color: transparent;
    border: none;
    color: white;

    font-size: 20px;
    cursor: pointer;
  }
`;
