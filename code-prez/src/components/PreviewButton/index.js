import React from 'react';
import styled from 'styled-components';

import play from '../../assets/play.png';
import backward from '../../assets/backward.png';
import forward from '../../assets/forward.png'
import pause from '../../assets/pause.png'
const IMAGES = [
    {type: "play", src: play},
    {type: "backward", src: backward},
    {type: "forward", src: forward},
    {type: "pause" , src: pause }
];

export default function PreviewButton({ details }) {

    const buttonImg = IMAGES
    .filter(img => img.type === details.type);
    console.log(buttonImg[0].src);
    return (
        <Button 
            onClick={() => {details.action()}}
        >
            <img style={{height: "15px", width: "15px"}}src={buttonImg[0].src} alt={buttonImg[0].type}/>
        </Button>
    )
}

const Button = styled.button`
    background-color: #313C4E;
    width: 70px;
    height: 35px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;