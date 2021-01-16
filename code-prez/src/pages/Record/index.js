import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CodeSpace from '../../components/CodeSpace';
import PreviewSpace from '../../components/PreviewSpace';
import CodeRecordNav from '../../components/CodeRecordNav';
import timer , { getTime , startTimer , togglePauseTimer , resetTimer } from '../../helpers/timer'
import useRecorder from '../../hooks/useRecorder'

import PreviewButton from '../../components/PreviewButton';
import ExportButton from '../../components/ExportButton';

export const RecordingStates = {
    NOT_STARTED : 'NOT_STARTED',
    RECORDING : 'RECORDING',
    PAUSED : 'PAUSED',
    FINISHED : 'FINISHED'
}

export default function Record() {

    const [seconds , setSeconds] = useState(0)
    const [mins , setMins] = useState(0)
    const [recording , setRecording] = useState(RecordingStates.NOT_STARTED)
    const [audio , setAudio] = useState({})

    
    const updateAudio = (url) => {
        const newAudio = new Audio(url);
        setAudio(newAudio)
    }
    const recorder = useRecorder(updateAudio);

    useEffect(() => {
        const interval = timer()

        return () => clearInterval(interval)
    } , [])

    useEffect(() => {
        const interval = setInterval(() => {
            const {sec , min } = getTime()
            setSeconds(sec)
            setMins(min)
        } , 1000)

        return () => clearInterval(interval)
    } , [])


    const record = () => {
        recorder.start()
        startTimer()
    }

    const pause = () => {
        recorder.pause()
        togglePauseTimer()
    }
    

    const stop = () => {
        recorder.stop()
        resetTimer()
    }

    function backwardPreview() {
        console.log("placeholder")
    }
    function forwardPreview() {
        console.log("placeholder")
    }
    function playPreview() {
        console.log("placeholder")
    }
    
    return (
        <Main>
            
            <RecordBG>
                <NavCon>
                    <CodeRecordNav record={record} pause={pause} stop={stop} mins={mins} seconds={seconds} />
                </NavCon>

                <BodyCon>
                    <InputCon>
                        <CodeSpace />
                    </InputCon>
                    <PreviewCon>
                        <PreviewSpace />
                        <PreviewButtons>
                            <PreviewButton details={{type: "backward", action: backwardPreview}} />
                            <PreviewButton details={{type: "play", action: playPreview}} />
                            <PreviewButton details={{type: "forward", action: forwardPreview}} />
                        </PreviewButtons>
                        <ExportButton />
                    </PreviewCon>
                </BodyCon>
            </RecordBG>


        </Main>
    )
}

const Main = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RecordBG = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4f617e;
    border-radius: 4px;
`;

const NavCon = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;

`;

const BodyCon = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const InputCon = styled.div`
    width: 60%;

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PreviewCon = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 40%;
    height: 100%;
    flex-direction: column;
`;

const PreviewButtons = styled.div`
    width: 92%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;