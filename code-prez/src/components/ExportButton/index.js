import React from 'react';
import styled from 'styled-components';
import Download from '../../assets/download.png'

export default function ExportButton() {
    return (
        <Div>
            <Button>
                    <img src={Download} alt="Export" />
                    <p style={{color: "white", fontSize: "14px"}}>
                        Export Recording
                    </p>

            </Button>
        </Div>

    )
}

const Div = styled.div`
    width: 92%;
    height: 25%;
    display: flex;
    align-items: flex-end;
`;
const Button = styled.button`
    width: 100%;
    height: 80%;
    border-radius: 4px;
    box-shadow: 0 0 7.5px #313C4E; 
    display: flex;
    flex-direction:column;
    cursor: pointer;
    background-color: #313C4E   ;
    justify-content:center;
    align-items:center;
    margin:5px 10px;
    border:none;
    color:#ffffff;
    transition:all 0.3s;
    padding-top:20px;
`;
