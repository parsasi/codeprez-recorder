import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import RecorderNavButton from '../RecorderNavButton' 
import Record from '../../assets/record.png'
import Pause from '../../assets/pause.png'
import Stop from '../../assets/stop.png'
import { RecordingStates } from '../../pages/Record'
import './animation.css'

const RecorderNavContainer = styled.div`
    width:100%;
    height:110px;
    background-color:#313C4E;
    display:flex;
    justify-content:center;
`
const RecorderNav = styled.div`
    width:80%;
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
    color:#ffffff;
`


export default function CodeRecordNav(props){

    return (
        <RecorderNavContainer>
            <RecorderNav>
                <RecorderNavButtons>
                    <RecorderNavButton disabled={props.recording === RecordingStates.RECORDING || props.recording === RecordingStates.PAUSED} onClick={props.record} ><img src={Record} alt="" className={props.recording === RecordingStates.RECORDING ? 'blink' : ''} /></RecorderNavButton>
                    <RecorderNavButton disabled={props.recording === RecordingStates.NOT_STARTED || props.recording === RecordingStates.FINISHED} onClick={props.pause}><img src={Pause} alt="" /></RecorderNavButton>
                    <RecorderNavButton disabled={props.recording === RecordingStates.NOT_STARTED || props.recording === RecordingStates.FINISHED} onClick={props.stop}><img src={Stop} alt="" /></RecorderNavButton>
                </RecorderNavButtons>
                <RecorderNavTimer>
                    {props.mins.toString().length === 1 && '0'}{props.mins }:{props.seconds.toString().length === 1 && '0'}{props.seconds}
                </RecorderNavTimer>
            </RecorderNav>
        </RecorderNavContainer>
    )
}