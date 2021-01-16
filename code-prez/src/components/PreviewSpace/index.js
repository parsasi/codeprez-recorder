import React from 'react';
import styled from 'styled-components';

export default function PreviewSpace() {
    return (
        <Main>
            <Input />
        </Main>
    )
}

const Main = styled.div`
    width: 85%;
    height: 45%;
`;

const Input = styled.div`
    width: 100%;
    height: 100%;
    background-color: #313C4E;
    border: none;
    border-radius: 4px;
`;