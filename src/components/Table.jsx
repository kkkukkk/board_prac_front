import React from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

const StyledTable = styled.div`
    border: 1px solid rgba(0,0,0,.5);
`;

const StyledTableHead = styled.div`
    & > div {
        background: #dfdfdf;
        border-bottom: 1px solid black
    }
`;

const StyledTableTh = styled.div`
    width: 100%;
`;

const StyledTableBody = styled.div`

`;

const StyledTableTr = styled.div`
    display: flex;
    padding: ${props => props.padding || "0px"};
    cursor: pointer;


    &:hover {
        background: #dfdfdf;
    }
    &:not(nth-child(1)) {

    }
`;

const StyledTableTd = styled.div`
    width: 100%;
`;

const Table = ({ result, resultHead, padding }) => {
    const tableHeads = resultHead.map((item)=>(
        <StyledTableTh key={uuid()}>{item}</StyledTableTh>
    ));

    const tableList = result.map((itemSet) => (
        <StyledTableTr 
            key={uuid()}
            padding={padding}
        >
            {
                getListItem(itemSet)
            }
        </StyledTableTr>
    ));
    
    function getListItem(itemSet) {
        return (
            Object.values(itemSet).map(item => (
                <StyledTableTd key={uuid()}>{item}</StyledTableTd>
            ))
        );
    }

    return (
        <StyledTable>
            <StyledTableHead>
                <StyledTableTr
                    padding={padding}
                >
                    {tableHeads}
                </StyledTableTr>
            </StyledTableHead>
            <StyledTableBody>
                {tableList}
            </StyledTableBody>
        </StyledTable>
    );
};

export default Table;