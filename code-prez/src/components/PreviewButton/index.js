import React from 'react';
import styled from 'styled-components';

import play from '../../assets/play.png';
import backward from '../../assets/backward.png';
import forward from '../../assets/forward.png'
const IMAGES = [
    {type: "play", src: play},
    {type: "backward", src: backward},
    {type: "forward", src: forward}
];

export default function PreviewButton({ details }) {

    const buttonImg = IMAGES
    .filter(img => img.type === details.type);
    console.log(buttonImg[0].src);
    return (
        <Button 
            onClick={() => {details.action()}}
        >
            <img style={{height: "15px", width: "15px"}}src={buttonImg[0].src} />
        </Button>
    )
}

const Button = styled.button`
    background-color: #313C4E;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;