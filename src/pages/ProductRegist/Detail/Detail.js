import React, { useState } from 'react';
import RegisterTitle from '../../../components/RegisterTitle/RegisterTitle';
import styled from 'styled-components';
import variables from '../../../styles/variables';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';

import 'react-quill/dist/quill.snow.css';

Quill.register('modules/imageResize', ImageResize);
const Detail = () => {
  const [value, setValue] = useState('');

  const toolbarOptions = [
    ['link', 'image', 'video'],
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'background',
    'color',
    'link',
    'image',
    'video',
    'width',
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
    imageResize: {
      parchment: Quill.import('partchment'),
      modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
  };

  return (
    <DetailContainer>
      <RegisterTitle title="상품상세 정보" />

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력하세요"
      />
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  .ql-editor {
    height: 70vh;
  }
`;
