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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const Input = styled.textarea`
    width: 85%;
    height: 92.5%;
    line-height: 1.5em;
    background-color: #313C4E;
    border: none;
    border-radius: 4px;
    padding-top: 2.5%;
    padding-right: 2.5%;
    padding-left: 2.5%;
    font-size: 14px;
    color: white;
    overflow-y: scroll;
    resize: none;
`;