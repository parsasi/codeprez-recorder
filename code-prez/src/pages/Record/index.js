import React, { useState } from 'react';
import styled from 'styled-components';
import CodeSpace from '../../components/CodeSpace';
import PreviewSpace from '../../components/PreviewSpace';
import CodeRecordNav from '../../components/CodeRecordNav';
import codeSnapshots from '../../codeSnapshots.json';

export default function Record() {
    const [recording, setRecording] = useState(false);
    const [currentTime, setCurrentTime] = useState("");
    const [totalRecordTime, setTotalRecordTime] = useState(0);

    codeSnapshots.snapshots.push({
        timestamp: totalRecordTime,
        text: "test"
    });
    console.log(codeSnapshots);

    function toggleRecord() {
        let time = new Date();
        if (!recording) {
            // If not recording and no time has been stored on button press, record and set time.
            console.log("recording...")
            setRecording(true)
            setCurrentTime(time);
        } else {
            console.log("paused...")
            setRecording(false);
            const totalTime = time - currentTime;
            const addedTime = totalTime + totalRecordTime;
            setTotalRecordTime(addedTime);
        } 
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
    justify-content: center;
    width: 40%;
    height: 100%;

`;