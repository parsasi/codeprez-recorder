import React from 'react'
import styled from 'styled-components'
import Button from '../Button' 
import Record from '../../assets/record.png'

const RecorderNavContainer = styled.div`
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


export default function CodeRecordNav(props){
    return (
        <RecorderNavContainer>
            <RecorderNav>
                <Button><img src={Record} alt="" /></Button>
            </RecorderNav>
        </RecorderNavContainer>
    )
}