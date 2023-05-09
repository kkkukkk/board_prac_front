import React from 'react';
import styled from 'styled-components';
import Button from './Button.jsx'

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid rgba(0,0,0,.3);
    background: aliceblue;
`;

const StyledTopMenu = styled.div`
    display: flex;
    gap: 20px;
`;

const StyledTopTitle = styled.div`
    font-size: 20px;
    padding: 20px;
`;

const StyledUserInfo = styled.div`
    display: flex;
    padding: 20px;

    border: 1px solid rgba(0,0,0,.3);
`;

const Header = ({ children, menuList }) => {
    const onHandleClick = (e) => {
        const tg = e.target;
        alert(
            tg.innerText
        )
    }

    const menuItem = menuList.map((menu, idx) => (
        <Button
            key={idx}
            padding={"20px 10px"}
            background={"inherit"}
            color={"black"}
            onClick={onHandleClick}
        >{menu}</Button>
    ))


    return (
        <StyledHeader>
            <StyledTopTitle>
                리액트 게시판
            </StyledTopTitle>
            <StyledTopMenu>
                {menuItem}
            </StyledTopMenu>
            <StyledUserInfo>
                유저정보
            </StyledUserInfo>
        </StyledHeader>
    );
};

export default Header;