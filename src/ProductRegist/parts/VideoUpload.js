import React, { useRef, useState } from 'react';
import RegisterTitle from '../../components/RegisterTitle/RegisterTitle';
import styled from 'styled-components';
import variables from '../../styles/variables';

const VideoUpload = props => {
  const { width, height } = props;

  const inputRef = useRef();

  const [source, setSource] = useState();

  const handleFileChange = event => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
    event.target.value = '';
  };

  const handleChoose = event => {
    inputRef.current.click();
  };

  const removeVideo = () => {
    setSource('');
    return;
  };

  return (
    <VideoContainer>
      <RegisterTitle title="상품 동영상" />

      <VideoContent>
        <span>동영상</span>
        <VideoInput>
          <input
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            accept=".mp4"
          />
          {!source && (
            <button className="addButton" onClick={handleChoose}>
              +
            </button>
          )}
          {source && (
            <VideoBox>
              <video width="100%" height={height} controls src={source} />
              <button onClick={removeVideo}>✕</button>
            </VideoBox>
          )}
          {/* source가 주소값이다. <div className="VideoInput_footer">{source || 'Nothing selectd'}</div> */}
        </VideoInput>
      </VideoContent>
    </VideoContainer>
  );
};

export default VideoUpload;

const VideoContainer = styled.div``;

const VideoContent = styled.div`
  ${variables.registerBox('', '')}

  span {
    font-size: 13px;
    ${variables.subMenuTitle}
  }
`;

const VideoInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }

  video {
    display: block;
    margin: 0;
  }

  .addButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 149px;
    height: 149px;
    border: 1px solid #ccc;
    font-size: 25px;
    background-color: transparent;
    color: gray;
    cursor: pointer;
  }
`;

const VideoBox = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 1px;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;
