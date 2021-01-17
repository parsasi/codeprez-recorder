import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CodeSpace from '../../components/CodeSpace';
import CodeRecordNav from '../../components/CodeRecordNav';
import timer , { getTime , startTimer , togglePauseTimer , resetTimer } from '../../helpers/timer'
import useRecorder from '../../hooks/useRecorder'
import Player from '../../components/Player'
import ExportButton from '../../components/ExportButton'
import LangDropdown from '../../components/LangDropdown'
import { langToExtension } from '../../helpers/lang-to-extention'



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
    const [audio , setAudio] = useState(new Audio())
    const [audioChunks , setAudioChunks] = useState([])
    const [snapshots , setSnapshots] = useState([])
    const [lang , setLang] = useState(Object.keys(langToExtension)[0])
    
    const updateAudio = (url , chunks) => {
        const newAudio = new Audio(url);
        setAudio(newAudio)
        setAudioChunks(chunks)
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
        setRecording(RecordingStates.RECORDING)
    }

    const pause = () => {
        recorder.pause()
        togglePauseTimer()
        recording === RecordingStates.RECORDING ? setRecording(RecordingStates.PAUSED) :  setRecording(RecordingStates.RECORDING) 
    }
    

    const stop = () => {
        recorder.stop()
        resetTimer()
        setRecording(RecordingStates.STOP) 
    }
    

    const addSnapshot = (snapshot) => {
        setSnapshots([...snapshots , snapshot])

    }

    return (
        <Main>
            
            <RecordBG>
                <NavCon>
                    <CodeRecordNav recording={recording} setRecording={setRecording} record={record} pause={pause} stop={stop} mins={mins} seconds={seconds} />
                </NavCon>
               
                <BodyCon>
                    <InputCon>
                        <LangDropdownContainer>
                            <LangDropdown lang={lang} setLang={setLang} />
                        </LangDropdownContainer>
                        <CodeSpaceContainer>
                            <CodeSpace lang={lang} addSnapshot={addSnapshot} mins={mins} seconds={seconds} />
                        </CodeSpaceContainer>
                        
                    </InputCon>
                    <PreviewCon>
                        <Player lang={lang} audio={audio} snapshots={snapshots} seconds={seconds} />
                        <ExportButton lang={lang} audioChunks={audioChunks} snapshots={snapshots} />
                    </PreviewCon>
                </BodyCon>
            </RecordBG>


        </Main>
    )
}

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#253D5B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LangDropdownContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    margin:10px 0;
    flex-direction: column;
`;

const CodeSpaceContainer = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`


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
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;



const PreviewCon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    width: 40%;
    height: 100%;
    flex-direction: column;
`;