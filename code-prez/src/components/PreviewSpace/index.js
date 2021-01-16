import React from 'react';
import styled from 'styled-components'
import CodeEditor from '../CodeEditor'

export default function PreviewSpace() {
    return (
        <Main>
            <CodeEditor readOnly={true} />
        </Main>
    )
}

const Main = styled.div`
    width: 92%;
    height: 45%;
    margin-top:15px;
`;

