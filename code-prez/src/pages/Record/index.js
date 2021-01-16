import React, { useState } from 'react';
import styled from 'styled-components';
import CodeSpace from '../../components/CodeSpace';
// import codeSnapshots from '../../codeSnapshots.json';

export default function Record() {
    const [recording, setRecording] = useState(false);
    const [currentTime, setCurrentTime] = useState("");
    const [totalRecordTime, setTotalRecordTime] = useState(0);


    function addSnapshot() {
        const addSnap = fetch("http://localhost:4040", {
            method: "POST",
            body: JSON.stringify({
                timestamp: totalRecordTime,
                text: "hello"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(addSnap)
        // const data = addSnap.json()
        // console.log(data);
    }
    // console.log("total record time: ", totalRecordTime);
    // console.log(currentTime);
    function toggleRecord() {
        let time = new Date();
        if (!recording) {
            // If not recording and no time has been stored on button press, record and set time.
            console.log("recording...")
            setRecording(true)
            setCurrentTime(time);
            console.log(currentTime);
        } else {
            console.log("paused...")
            setRecording(false);
            const totalTime = time - currentTime;
            const addedTime = totalTime + totalRecordTime;
            setTotalRecordTime(addedTime);
            addSnapshot();
            
        } 
    }
    return (
        <Main>
            
            {/* <button
                onClick={() => {toggleRecord()}}
            >
                {!recording ? "record" : "pause"}
            </button> */}
            <CodeSpace />
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100%;
`