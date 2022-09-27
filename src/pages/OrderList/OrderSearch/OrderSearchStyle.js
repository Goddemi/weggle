import styled from 'styled-components';

const S = {};

S.SearchTableBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  background-color: ${({ theme: { style } }) => style.white};
  border: 1px solid ${({ theme: { style } }) => style.lineGray};
  width: 90%;
  padding: 10px;
`;

S.SearchTableHeader = styled.div`
  background-color: ${({ theme: { style } }) => style.white};
  border: 1px solid ${({ theme: { style } }) => style.lineGray};
  border-bottom: none;
  width: 90%;
  font-size: 20px;
  padding: 10px;
`;

S.SearchTabletitle = styled.div`
  margin: 0 10px;
`;

S.SearchTable = styled.table`
  width: 100%;
  height: 100%;
  margin: 20px 0;
  border: 1.1px solid ${({ theme: { style } }) => style.black};
  text-align: center;
`;

S.TableTr = styled.tr`
  border: 1px solid ${({ theme: { style } }) => style.lightGray};
`;

S.TableTd = styled.td`
  ${({ theme: { variables } }) => variables.flex('', null, 'baseline')}
  padding: 10px;
  vertical-align: middle;
`;

S.TableTh = styled.th`
  background-color: ${({ theme: { style } }) => style.lineGray};
  width: 150px;
  border: 1px solid ${({ theme: { style } }) => style.lightGray};
  vertical-align: middle;
`;

S.InputBox = styled.input`
  /* width: 95%; */
  /* margin: 0 10px; */
  border: none;
  outline: none;
  cursor: pointer;
`;

S.InputBoxBorder = styled.input`
  /* width: 95%; */
  margin: 0 10px;
  outline: none;
  cursor: pointer;
`;

S.CheckBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('row')}
  margin-right: 10px;
`;

S.CheckBoxContainer = styled.div`
  ${({ theme: { variables } }) => variables.flex('row')}
`;

S.SearchBtn = styled.button`
  background-color: ${({ theme: { style } }) => style.hotpinnk};
  width: 160px;
  height: 40px;
  margin: 0 5px;
  border: none;
  border-radius: 10px;
  &:hover {
    opacity: 0.7;
    transition-duration: 0.3s;
  }
  &:active {
    opacity: 1;
  }
`;

S.SelectBtn = styled.select`
  /* width: 95%; */
  border: none;
  outline: none;
  cursor: pointer;
`;

S.BtnBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('row')}
`;

export default S;
