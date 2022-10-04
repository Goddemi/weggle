import styled from 'styled-components';

const S = {};

S.TabSpan = styled.span`
  margin: 0 10px;
`;

S.TableTd = styled.td`
  height: 50px;
  max-width: 300px;
  border: 1px solid ${({ theme: { style } }) => style.lightGray};
  vertical-align: middle;
`;

// order span styled

S.OrderSpan = styled(S.TabSpan)`
  margin: 5px 0;
`;

S.OrderGraySpan = styled(S.TabSpan)`
  margin: 5px 0;
  color: gray;
`;

// 주문 상품 styled

S.OrderCommodityContainer = styled.div`
  ${({ theme: { variables } }) => variables.flex('', null)}
  padding: 10px;
  &:hover {
    background-color: ${({ theme: { style } }) => style.lineGray};
  }
`;

S.OrderCommodityBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('', null)}
  padding: 10px;
`;

S.OrderImage = styled.img`
  width: 40px;
  height: 40px;
`;

S.OrderCommodityDetail = styled.div`
  ${({ theme: { variables } }) => variables.flex('column', null, 'baseline')}
  margin-left:10px;
  font-size: 12px;
`;

// addOn styled

S.AddonBox = styled(S.OrderCommodityDetail)`
  margin: 0;
`;

export default S;
