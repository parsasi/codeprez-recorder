import React from 'react'
import styled from 'styled-components'
import Button from '../Button' 
import Record from '../../assets/record.png'
import Pause from '../../assets/pause.png'
import Stop from '../../assets/stop.png'

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


export default function CodeRecordNav(props){
    return (
        <RecorderNavContainer>
            <RecorderNav>
                <Button><img style={{height: "20px", width: "20px"}} src={Record} alt="" /></Button>
                <Button><img style={{height: "20px", width: "20px"}} src={Pause} alt="" /></Button>
                <Button><img style={{height: "20px", width: "20px"}} src={Stop} alt="" /></Button>
            </RecorderNav>
        </RecorderNavContainer>
    )
}