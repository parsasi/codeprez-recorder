import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CodeSpace from '../../components/CodeSpace';
import PreviewSpace from '../../components/PreviewSpace';
import CodeRecordNav from '../../components/CodeRecordNav';
import ExportButton from '../../components/ExportButton';
import PreviewButton from '../../components/PreviewButton';

import codeSnapshots from '../../codeSnapshots.json';
import useRecorder from '../../hooks/useRecorder';


export default function Record() {
    const [recording, setRecording] = useState(false);
    const [currentTime, setCurrentTime] = useState("");
    const [totalRecordTime, setTotalRecordTime] = useState(0);

    // let timer;
    // // if (recording) {
    // //     timer = setInterval(() => {
    // //         const current = new Date();
    // //         console.log(current - time);
    // //     }, 50);
    // // } else {
    // //     clearInterval(timer);
    // // }

    useEffect(() => {
        let time = new Date();
        if (recording) {
            const interval = setInterval(() => {
                const current = new Date();
                let intervalTime = (current - time)
                //console.log(intervalTime);
                if (intervalTime % 100 === 0) {
                    codeSnapshots.snapshots.push({
                        timestamp: current - currentTime,
                        text: "test"
                    })
                    console.log(codeSnapshots.snapshots.length);
                }
            }, 50);
            return () => {
                clearInterval(interval)
            }
        }

    }, [recording])

    function toggleRecord() {
        let time = new Date();
        let timer;
        if (!recording) {
            // If not recording and no time has been stored on button press, record and set time.
            console.log("recording...")
            setRecording(true)
            setCurrentTime(time);
        } else if (recording) {
            console.log("paused...")
            setRecording(false);
            const totalTime = time - currentTime;
            const addedTime = totalTime + totalRecordTime;
            setTotalRecordTime(addedTime);
        } 
    }

    function playPreview() {
        console.log("play placeholder");
    }

    function backwardPreview() {
        console.log("backward placeholder");
    }

    function forwardPreview() {
        console.log("forward preview");
    }
    return (
        <Main>
            {/* <button
                onClick={() => {toggleRecord()}}
            >
                {!recording ? "record" : "pause"}
            </button> */}
            <RecordBG>
                <NavCon>
                <CodeRecordNav />
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