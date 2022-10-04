import styled from 'styled-components';

const S = {};

S.TableResult = styled.div`
  ${({ theme: { variables } }) => variables.flex('', null)}
  background-color: ${({ theme: { style } }) => style.white};
  border: 1px solid ${({ theme: { style } }) => style.lineGray};
  border-bottom: none;
  width: 90%;
  font-size: 20px;
  padding: 10px;
  margin-top: 30px;
`;

S.TableTab = styled.div`
  ${({ theme: { variables } }) => variables.flex('', null)}
  background-color: ${({ theme: { style } }) => style.white};
  border: 1px solid ${({ theme: { style } }) => style.lineGray};
  border-bottom: none;
  width: 90%;
  font-size: 13px;
  padding: 10px;
`;

S.TabSpan = styled.span`
  margin: 0 10px;
`;

S.TabBtn = styled(S.TabSpan)`
  cursor: pointer;
`;

export default S;
