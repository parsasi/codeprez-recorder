import React from 'react';
import styled from 'styled-components'
import CodeEditor from '../CodeEditor'

export default function PreviewSpace(props) {
    const currentSnap = props.snapshots
    .filter(snap => snap.timestamp === Math.round(props.currentTime));
    
    return (
        <Main>
            <CodeEditor content={props.currentTime != 0 ? currentSnap[0].text : null} readOnly={true} />
        </Main>
    )
}

const Main = styled.div`
    width: 92%;
    height: 45%;
    margin-top:15px;
`;

