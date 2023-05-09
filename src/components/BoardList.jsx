import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Table from './Table';

const StyledBoardList = styled.div`

`;

const StyledTableWrapper = styled.div`

    height: 500px;
    margin-top: 80px;
    padding: 30px;
    background: azure;
`;

const StyledTableTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const BoardList = () => {
    const menuList = [
        "홈",
        "게시판 목록",
        "글쓰기",
        "공지사항",
        "관리자페이지", 
    ];

    const resultHead = [
        "번호",
        "이름",
        "제목",
        "날짜"
      ]
    
      const result = [
        {
          number: 0,
          name: "김지연",
          title: "안녕하세요",
          date: "2023.05.07"
        },
        {
          number: 1,
          name: "박진욱",
          title: "반갑습니다",
          date: "2023.05.07"
        },
        {
          number: 2,
          name: "아무개",
          title: "아무개이비다",
          date: "2023.05.08"
        },
      ]

    return (
        <StyledBoardList>
            <Header
                menuList={menuList}
            >
            </Header>
            <StyledTableWrapper>
                <StyledTableTitle>
                    게시글 목록
                </StyledTableTitle>
                <Table
                    result={result}
                    resultHead={resultHead}
                    padding={"10px"}
                ></Table>
            </StyledTableWrapper>
        </StyledBoardList>
    );
};

export default BoardList;