import { useState } from 'react'
import CodeRecorderNav from '../../components/CodeRecordNav'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo_codeprez_color.png';
import landingImage from '../../assets/undraw_video_upload_3d4u.png'


const HomeContainer = styled.div`
    background-color: white;
    min-height:100vh;
    color:#ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentCon = styled.div`
    min-height: 600px;
    min-width: 1000px;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;


`;
const ImgCon = styled.div`
    width: 50%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`;

const Button = styled.button`
    background: rgb(33,30,30);
    background: linear-gradient(21deg, rgba(33,30,30,1) 62%, rgba(51,51,51,1) 97%);

    color: #e5e5e5;
    font-size: 16px;
    font-weight: 600;
    border: 0px solid;
    border-radius: 0.25em;
    height: 3em;
    width: 12em;
    outline: 0;
    cursor: pointer;
    :hover{
        transform: scale(1.05)
    }
`;
const Slogan = styled.p`
    color: #a6a6a6;
    font-size: 22px;
`;

export default function Home() {

    const [hover, setHover] = useState(false);

    return (
        <HomeContainer>
            <ContentCon>
            <ImgCon>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                    <img style={{height: "89px", width: "240px"}} src={logo} />
                    <Slogan>Elevate your videos</Slogan>
                </div>

                <Link 
                    to="/record"
                    style={{
                        outline: 0,
                        textDecoration: "none",
                        color: "#6c63ff",
                        fontSize: hover ? "24px" : "22px",
                        height: "75px",
                        animation: hover ? "glow 5s ease-in-out infinite alternate" : "none"
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    ENTER
                </Link>
            </ImgCon>
            <img style={{height: "366px", width: "425px"}} src={landingImage} />
            </ContentCon>

        </HomeContainer>
    )
}