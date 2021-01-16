import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../Button' 
import Record from '../../assets/record.png'
import Pause from '../../assets/pause.png'
import Stop from '../../assets/stop.png'
import { RecordingStates } from '../../pages/Home'

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
`

export default function CodeRecordNav(props){

    return (
        <RecorderNavContainer>
            <RecorderNav>
                <RecorderNavButtons>
                    <Button onClick={props.record} ><img src={Record} alt="" /></Button>
                    <Button onClick={props.pause}><img src={Pause} alt="" /></Button>
                    <Button onClick={props.stop}><img src={Stop} alt="" /></Button>
                </RecorderNavButtons>
                <RecorderNavTimer>
                    {props.mins}:{props.seconds}
                </RecorderNavTimer>
            </RecorderNav>
        </RecorderNavContainer>
    )
}