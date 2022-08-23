import styled from 'styled-components';

const S = {};

S.Productlist = styled.div`
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  width: auto;
  box-sizing: border-box;
  background: rgba(218, 218, 218, 1);
`;
S.Wraper = styled.div`
  padding: 50px;
  /* border: 1px solid black; */
`;

S.Category = styled.div`
  margin-bottom: 30px;
  font-weight: 300;
  size: 20px;
  line-height: 25px;
  letter-spacing: 0.1px;
`;

S.CategoryTitle = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  color: #1c1c1e;
`;

S.SearchBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #dadada;
`;

S.SearchTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px 0 30px;
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  border-bottom: 1px solid #dadada;
`;

S.SearchButton = styled.button`
  margin: 30px 0 50px 0;
  padding: 10px 65px 10px 65px;
  background: #ff0073;
  border: 1px solid #dadada;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

// 조회 결과 부분 css
S.SearchResult = styled.div`
  border: 1px solid #dadada;
  background: #ffffff;
`;

S.ResultLength = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: rgba(255, 0, 115, 1);
`;

S.ListDelete = styled.button`
  margin: 0 30px 10px 30px;
  width: 120px;
  height: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: #ffffff;
  border: 1px solid #adafb3;
`;

S.ResultTable = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
`;

S.DataGridField = styled.div`
  width: 100%;
  margin: 0 30px 0 30px;
`;

S.ResultTitle = styled.div``;
export default S;
