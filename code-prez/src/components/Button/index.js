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
        cursor:${!props.disabled ? `not-allowed` : 'pointer'};
        transition:all 0.3s;

        &:hover{
            transform: ${!props.disabled ? `scale(1.1)` : 'none'};
        }
    `

    return (

            <StyledButton disabled={props.disabled || false} onClick={props.onClick}>
                {props.children}
            </StyledButton>

    )
}