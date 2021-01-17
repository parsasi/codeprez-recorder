import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function PlayBar({timeDetails, totalTime, isPlaying, setPlayTime}) {

    let currentWidth;
    if (isPlaying) {
        const totalAudioTime = timeDetails.duration === Infinity ? totalTime : timeDetails.duration;
        currentWidth = (timeDetails.currentTime / totalAudioTime) * 100;
    }
    function changeTime(e) {
        const totalAudioTime = timeDetails.duration === Infinity ? totalTime : timeDetails.duration;
        const bgBar = document.querySelector(".bar");
        const barStart = bgBar.getBoundingClientRect().left + window.scrollX;
        const barEnd = bgBar.getBoundingClientRect().right + window.scrollX;
        const clickedSpot = e.pageX - barStart;
        const barWidth = barEnd - barStart;
        const barPercent = (clickedSpot / barWidth) * 100;
        if (currentWidth) {
            timeDetails.currentTime = (barPercent * totalAudioTime) / 100;
            currentWidth = barPercent;
        }

    }
    console.log(currentWidth)
    return (
        <MainCon>
            <BackgroundBar
            className="bar"                 
            onMouseDown={(e) => changeTime(e)} />
            <ProgressBar 
                style={{width: currentWidth ? `${currentWidth}%` : "0%"}}
                onMouseDown={(e) => {changeTime(e)}}
            >

                <Circle 
                    className="circle" style={{left: `98%`, backgroundColor: totalTime > 0 ? "#6c63ff" : "grey"}} 

                />

            </ProgressBar>
        </MainCon>
    )
}

const MainCon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 92%;
    height: 50px;

`;
const Circle = styled.div`
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background-color: #6c63ff;
    box-shadow: 0 0 2px #000000;
    z-index: 100;
`;
const BackgroundBar = styled.div`
    position: relative;
    background-color: grey;
    border-radius: 5px;
    width: 100%;
    height: 10px;
`;

const ProgressBar = styled.div`
    flex: 1;
    position: absolute;
    background-color: rgba(108,99,255,0.7);
    height: 10px;
    display: flex;
    border-radius: 5px;
    align-items: center;

    cursor: pointer;

    .circle {
        border-radius: 50%;
        height: 15px;
        width: 15px;
        background-color: #6c63ff;
        box-shadow: 0 0 2px #000000;
        z-index: 100;
        position: relative;
    }
`;
