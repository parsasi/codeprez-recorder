import React from 'react'
import styled from 'styled-components'

export default function Button(props){

    const StyledButton = styled.button`
        min-width:100px;
        font-size:1.6rem;
        padding:15px 20px;
        background-color: ${props.dark ? '#212936' : '#2B3648'};
        display:flex;
        justify-content:center;
        align-items:center;
        margin:5px 10px;
        border-radius:10px;
        border:none;
        color:#ffffff;
        cursor:pointer;
        transition:all 0.3s;

        &:hover{
            transform: scale(1.1);
        }
    `

    return (

            <StyledButton onClick={props.onClick}>
                {props.children}
            </StyledButton>

    )
}