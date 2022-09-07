import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import './MuiCustom.scss';

const Main = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  let today = new Date();

  let nowHours = today.getHours(); // 시
  let nowMinutes = today.getMinutes(); // 분

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function createData(id, content, date) {
    return { id, content, date };
  }

  const prodcutsInquiry = [
    createData(
      'yni0927',
      '새우 알레르기가 있는데 먹어도 상관없나요? 공장이 새우 작업을 한다고 해서 걱정이 됩니다.',
      '2021-06-24'
    ),
    createData('tiffany0000', '상품 입고가 언제쯤 되나요?', '2021-06-23'),
    createData('yni0927', '상품 문의 드려요', '2021-06-22'),
    createData(
      'yni0927',
      '방금 배송 받았는데 상품에 하자가 있네요.',
      '2021-06-21'
    ),
    createData('yni0927', '입고 언제 되나요?', '2021-06-21'),
    createData('yni0927', '재입고되나요?', '2021-06-20'),
  ];

  const orderInquiry = [];

  return (
    <MainContainer>
      <MainContents>
        <MainStatus>
          <MainContTit>
            <p>주문현황</p>
            <span>(최근 1개월 기준)</span>
          </MainContTit>
          <MainStatusCards>
            <MainStatusCard>
              <TableContainer>
                <Table
                  aria-label="simple table"
                  sx={{ minWidth: '34.896vw', border: '1px solid #DADADA' }}
                >
                  <TableHead sx={{ bgcolor: '#fff' }}>
                    <TableRow>
                      <TableCell>주문 (0건)</TableCell>
                      <TableCell align="right">
                        <BoldTxt>0 원</BoldTxt>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ '& td, & th': { border: 0 } }}>
                      <TableCell>결제대기</TableCell>
                      <TableCell align="right">
                        <WegColor>0</WegColor> 건
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& td, & th': { border: 0 } }}>
                      <TableCell>배송준비중</TableCell>
                      <TableCell align="right">
                        <WegColor>0</WegColor> 건
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& td, & th': { border: 0 } }}>
                      <TableCell>배송중</TableCell>
                      <TableCell align="right">
                        <WegColor>0</WegColor> 건
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& td, & th': { border: 0 } }}>
                      <TableCell>배송완료</TableCell>
                      <TableCell align="right">
                        <BoldTxt>0</BoldTxt> 건
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainStatusCard>
            <MainStatusCard>
              <TableContainer>
                <Table
                  aria-label="simple table"
                  sx={{ minWidth: '34.896vw', border: '1px solid #DADADA' }}
                >
                  <TableHead sx={{ bgcolor: '#fff' }}>
                    <TableRow>
                      <TableCell>결제대기 (0건)</TableCell>
                      <TableCell align="right">
                        <BoldTxt>0 원</BoldTxt>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ '& td, & th': { border: 0 } }}>
                      <TableCell>취소요청</TableCell>
                      <TableCell align="right">
                        <WegColor>0</WegColor> 건
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& td, & th': { border: 0 } }}>
                      <TableCell>반품요청</TableCell>
                      <TableCell align="right">
                        <WegColor>0</WegColor> 건
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& td, & th': { border: 0 } }}>
                      <TableCell>교환요청</TableCell>
                      <TableCell align="right">
                        <WegColor>0</WegColor> 건
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ '& td, & th': { border: 0 } }}>
                      <TableCell>구매확정</TableCell>
                      <TableCell align="right">
                        <BoldTxt>0</BoldTxt> 건
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MainStatusCard>
          </MainStatusCards>
        </MainStatus>
        <MainInquiryBoard>
          <MainContTit>
            <p>미답변 문의</p>
            <span>
              (최근 {nowHours}:{nowMinutes})
            </span>
          </MainContTit>
          <Box sx={{ width: '100%' }}>
            <Box>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs"
              >
                <StyledTab label="상품문의" {...a11yProps(0)} />
                <StyledTab label="주문/배송문의" {...a11yProps(1)} />
              </StyledTabs>
            </Box>
            {/* 첫번째 탭 컨텐츠 */}
            <TabPanel value={value} index={0}>
              {prodcutsInquiry && (
                <TableContainer>
                  <Table
                    aria-label="simple table"
                    sx={{ border: '1px solid #DADADA' }}
                  >
                    <TableBody sx={{ bgcolor: '#fff' }}>
                      {prodcutsInquiry.map((row, idx) => (
                        <TableRow
                          key={idx}
                          sx={{ '& td, & th': { border: 0 } }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontWeight: '600' }}
                          >
                            &#91;{row.id}&#93;
                          </TableCell>
                          <TableCell>{row.content}</TableCell>
                          <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
              <NoData>
                <p>
                  <i className="fa-regular fa-circle-exclamation" />
                  등록된 상품문의가
                  <br />
                  없습니다.
                </p>
              </NoData>
            </TabPanel>
            {/* 두번째 탭 컨텐츠 */}
            <TabPanel value={value} index={1}>
              {orderInquiry && (
                <TableContainer>
                  <Table
                    aria-label="simple table"
                    sx={{ border: '1px solid #DADADA' }}
                  >
                    <TableBody sx={{ bgcolor: '#fff' }}>
                      {orderInquiry.map((row, idx) => (
                        <TableRow
                          key={idx}
                          sx={{ '& td, & th': { border: 0 } }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontWeight: '600' }}
                          >
                            &#91;{row.id}&#93;
                          </TableCell>
                          <TableCell>{row.content}</TableCell>
                          <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
              <NoData>
                <p>
                  <i className="fa-regular fa-circle-exclamation" />
                  등록된 주문/배송문의가
                  <br />
                  없습니다.
                </p>
              </NoData>
            </TabPanel>
            <MoreInquiryBtn to="/">더보기</MoreInquiryBtn>
          </Box>
        </MainInquiryBoard>
      </MainContents>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const MainContents = styled.div`
  padding: 50px 210px 50px 50px;
`;

const MainStatus = styled.div`
  display: block;
`;

const MainStatusCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainStatusCard = styled.div`
  background-color: #fff;
  margin-right: 10px;
`;

const MainContTit = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  p {
    padding-right: 10px;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
  }

  span {
    font-size: 22px;
    color: #adafb2;
  }
`;

const MainInquiryBoard = styled.div`
  margin-top: 82px;
`;

const StyledTabs = styled(props => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    bottom: 'auto',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#FF0073',
  },
});

const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    color: '#797C82',
    '&.MuiTab-root': {
      minWidth: 250,
      backgroundColor: '#EAEAEA',
      border: '1px solid #dadada',
      borderBottom: 0,
      fontSize: 20,
    },
    '&.MuiTab-root:last-child': { borderLeft: 0 },
    '&.MuiTab-root.Mui-selected': {
      color: '#FF0073',
      backgroundColor: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  min-height: 320px;
  text-align: center;
`;

const MoreInquiryBtn = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 7px 42px;
  background-color: #fff;
  border: 1px solid #dadada;
  color: #797c82;
  font-size: 20px;
  line-height: 25px;
  text-decoration: none;
`;

const WegColor = styled.span`
  color: #ff0073;
  font-size: 25px;
  line-height: 30px;
  font-weight: 500;
`;

const BoldTxt = styled.span`
  color: #1c1c1e;
  font-size: 25px;
  line-height: 30px;
  font-weight: 500;
`;
