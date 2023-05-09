import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    cursor: pointer;

    padding: ${(props) => props.padding || "5px"};
    background: ${(props) => props.background || "black"};
    color: ${(props) => props.color || "white"};

    &:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`;

const Button = ({ onClick, children, ...res }) => {
    return (
        <StyledButton
            onClick={onClick}
            {...res}
        >{children}</StyledButton>
    );
};

export default Button;

// props
// 부모로부터 전달 받는 속성