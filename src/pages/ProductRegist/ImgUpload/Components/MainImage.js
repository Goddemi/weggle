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
  console.log(mainImage);

  const MainImages = ({ imageList }) => {
    const removeImage = () => {
      setMainImage([]);
      console.log(mainImage);
      return;
    };
    return imageList.map((image, i) => {
      return (
        <div key={i}>
          <img alt="main" src={image.url} />
          <button onClick={removeImage}>삭제</button>
        </div>
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
