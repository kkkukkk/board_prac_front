import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid rgba(0,0,0, .3);
    border-radius: 5px;
    padding: 5px;

    &:focus {
        outline: none;
    }
`;

const Input = ({ basic }) => {
    return (
        <StyledInput
            id={basic}
            name={basic}
        />
    );
};

export default Input;