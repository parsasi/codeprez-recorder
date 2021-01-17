import React from 'react';
import styled from 'styled-components';
import DownloadImage from '../../assets/download.png'
import download from '../../helpers/download'
import downloadRecording from '../../helpers/download-recording'
import generateFile from '../../helpers/generate-file'

export default function ExportButton(props) {

    const downloadFile = () => {
        const formattedOutput = generateFile(props.snapshots)
        download('CodePrez.cdpz' , JSON.stringify(formattedOutput))
        downloadRecording(props.audioChunks)
    }

    return (
        <Div>
            <Button onClick={downloadFile}>
                    <img src={DownloadImage} alt="Export" />
                    <p style={{color: "white", fontSize: "14px"}}>
                        Export Recording
                    </p>

            </Button>
        </Div>

    )
}

const Div = styled.div`
    width: 96%;
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
