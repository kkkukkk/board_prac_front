import React from 'react';
import styled from 'styled-components';

const StyledItems = styled.ul`
    list-style: none;

    border: 1px solid rgba(0,0,0,.3);

    `;
    
const StyledItem = styled.li`
    border-bottom: 1px solid rgba(0,0,0,.3);
    
    &:last-child {
        border-bottom: none;
    }
`;

const List = () => {
    return (
        <StyledItems>
            <StyledItem>1</StyledItem>
            <StyledItem>2</StyledItem>
            <StyledItem>3</StyledItem>
            <StyledItem>4</StyledItem>
        </StyledItems>
    );
};

export default List;