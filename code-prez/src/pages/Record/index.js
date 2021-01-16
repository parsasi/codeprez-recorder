import React, { useState } from 'react';
import styled from 'styled-components';
import codeSnapshots from '../../codeSnapshots.json';

export default function Record() {
    const [recording, setRecording] = useState(false);
    const [currentTime, setCurrentTime] = useState("");
    const [totalRecordTime, setTotalRecordTime] = useState("");

    console.log(codeSnapshots);
    console.log("total record time: ", totalRecordTime);
    console.log(currentTime);
    function toggleRecord() {
        let time;
        if (!recording) {
            // If not recording and no time has been stored on button press, record and set time.
            console.log("recording...")
            setRecording(true)
            time = new Date();
            setCurrentTime(time);
        } else {
            console.log("paused...")
            setRecording(false);
            const newStartTime = new Date();
            const totalTime = (newStartTime - currentTime);
            setTotalRecordTime(totalTime + totalRecordTime);
        } 
    }
    return (
        <Main>
            <p>Hello</p>
            <button
                onClick={() => {toggleRecord()}}
            >
                {!recording ? "record" : "pause"}
            </button>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100%;
`