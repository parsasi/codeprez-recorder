import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../Button' 
import Record from '../../assets/record.png'
import Pause from '../../assets/pause.png'
import Stop from '../../assets/stop.png'
import { RecordingStates } from '../../pages/Home'

const RecorderNavContainer = styled.div`
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    height:75px;
    width: 100%;
    background-color:#313C4E;
    display:flex;
    justify-content:center;
`
const RecorderNav = styled.div`
border-top-radius: 4px;
    width:96.5%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`
const RecorderNavButtons = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
`
const RecorderNavTimer = styled.div`
    margin-left:50px;
    font-size:2rem;
`

export default function CodeRecordNav(props){

    const [recordedTime , setRecordedTime] = useState({min : '00' , sec : '00'})

    useEffect(() => {

        
    } , [props.recordedTime , props.setRecordedTime])

    return (
        <RecorderNavContainer>
            <RecorderNav>
                <RecorderNavButtons>
                    <Button disabled={props.recordingState !== RecordingStates.NOT_STARTED}><img src={Record} alt="" /></Button>
                    <Button disabled={props.recordedState === RecordingStates.NOT_STARTED}><img src={Pause} alt="" /></Button>
                    <Button disabled={props.recordedState !== RecordingStates.NOT_STARTED}><img src={Stop} alt="" /></Button>
                </RecorderNavButtons>
                <RecorderNavTimer>
                    {recordedTime.min}:{recordedTime.sec}
                </RecorderNavTimer>
            </RecorderNav>
        </RecorderNavContainer>
    )
}