import styled from 'styled-components';

const S = {};

S.OrderPageBackground = styled.div`
  background-color: ${({ theme: { style } }) => style.backgroundGray};
  width: 100vw;
  height: 100vh;
`;

S.OrderPageContainer = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  background-color: ${({ theme: { style } }) => style.backgroundGray};
  padding: 30px;
`;

S.OrderPageHeaderBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('column', null, null)}
  width: 90%;
  padding: 10px;
`;

S.OrderNav = styled.span`
  margin-bottom: 50px;
  font-size: 15px;
`;

S.OrderListTitle = styled.span`
  margin: 10px 0;
  font-size: 20px;
  font-size: bold;
`;

export default S;
