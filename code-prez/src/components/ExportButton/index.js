import React from 'react';
import styled from 'styled-components';

export default function ExportButton() {
    return (
        <Div>
            <Button>
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
const Button = styled.div`
    width: 100%;
    height: 80%;
    border-radius: 4px;
    box-shadow: 0 0 7.5px #313C4E; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
