import React, { useState } from 'react';
import styled from 'styled-components';
import handleResize from './Resize';

const SubImage = () => {
  const [subImage, setSubImage] = useState([]);

  const getImageList = newImageList => {
    setSubImage(newImageList);
  };

  const handleSubImageUpload = async event => {
    let fileArr = event.target.files; //  사용자가 선택한 파일들
    let subImageLength = subImage.length;
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length; // 최대 10개
    if (subImageLength + filesLength > 10) {
      alert('이미지는 10장을 초과할 수 없습니다.');
      return;
    }

    for (let i = 0; i < filesLength; i++) {
      let newImage = await handleResize(fileArr[i]);
      setSubImage(subImage => [...subImage, newImage]);
    }

    event.target.value = '';
  };

  const SubImages = ({ imageList, getImageList }) => {
    const removeImage = id => {
      let newList = imageList.filter(image => image.id !== id);
      getImageList(newList);

      return;
    };
    return imageList.map(image => {
      return (
        <div key={image.id}>
          <img alt={image.id} src={image.url} />
          <button onClick={() => removeImage(image.id)}>삭제</button>
        </div>
      );
    });
  };

  return (
    <SubContainer>
      <SubImages imageList={subImage} getImageList={getImageList} />
      <label>
        +
        <input
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          multiple
          onChange={handleSubImageUpload}
        />
      </label>
    </SubContainer>
  );
};

export default SubImage;

const SubContainer = styled.div`
  display: flex;
`;
