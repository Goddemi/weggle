import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ExchangeRule = () => {
  const [value, setValue] = useState('');

  const toolbarOptions = [
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
  ];
  const formats = ['bold', 'italic', 'underline', 'list', 'bullet', 'align'];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };
  return (
    <ExchangeContainer>
      <RegisterTitle title="교환/반품 정책" />

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="내용을 입력하세요"
        formats={formats}
        modules={modules}
      />
    </ExchangeContainer>
  );
};

export default ExchangeRule;

const ExchangeContainer = styled.div`
  .ql-editor {
    height: 40vh;
  }
`;
