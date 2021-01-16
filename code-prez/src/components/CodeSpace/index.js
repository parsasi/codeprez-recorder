import React from 'react';
import styled from 'styled-components';

export default function CodeSpace() {
    return (
        <Main>
            <Input />
        </Main>
    )
}

const Main = styled.div`
    width: 50%;
    height: 80%;
`;

const Input = styled.input`
    width: 80%;
    height: 90%;
    background-color: gray;
`;