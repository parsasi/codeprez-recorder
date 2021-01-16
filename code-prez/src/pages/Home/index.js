import { useState } from 'react'
import CodeRecorderNav from '../../components/CodeRecordNav'
import styled from 'styled-components'

export const RecordingStates = {
    NOT_STARTED : 'NOT_STARTED',
    RECORDING : 'RECORDING',
    PAUSED : 'PAUSED',
    FINISHED : 'FINISHED'
}

const HomeContainer = styled.div`
    background-color:#2B3648;
    min-height:100vh;
    color:#ffffff;
`


export default function Home() {

    const [recordingState , setRecordingState] = useState(RecordingStates.NOT_STARTED);
    const [recordedTime , setRecordedTime] = useState(0);

    return (
        <HomeContainer>
            <CodeRecorderNav recordedTime={recordedTime} recordingState={recordingState} setRecordingState={setRecordingState} />
            <p>Home page.</p>
        </HomeContainer>
    )
}