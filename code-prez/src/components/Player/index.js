import React , {useState , useEffect} from 'react'
import PreviewButton from '../../components/PreviewButton';
import PreviewSpace from '../../components/PreviewSpace';
import styled from 'styled-components'
import CodeSandboxLogo from '../../assets/codesandbox.svg'
import DownloadFileIcon from '../../assets/download-file.png'
import downloadFile from '../../helpers/download'
import createSandbox from '../../helpers/create-sandbox'

export default function Player(props){

    const skipLength = 5;

    const [currentPlayTime, setCurrentPlayTime] = useState(0);
    const [playing, setPlaying] = useState(false);



    function backwardPreview() {
        if((props.audio.currentTime) > skipLength){
            props.audio.currentTime -= skipLength
        }
    }
    function forwardPreview() {
        if((props.audio.duration - props.audio.currentTime) > skipLength){
            props.audio.currentTime += skipLength
        }
    }

    function downloadSnapshot(){
        const currentSnap = props.snapshots
        .filter(snap => snap.timestamp === Math.floor(props.audio.currentTime));
        if(currentSnap.length){
            downloadFile(currentSnap[0].hash , currentSnap[0].text)
        } 
    }
    
    function playPreview() {
        if(props.audio){
            props.audio.play()
            setPlaying(true);
        }
    }

    function sendToSandbox(){
        const currentSnap = props.snapshots
        .filter(snap => snap.timestamp === Math.floor(props.audio.currentTime));
        if(currentSnap.length){
            const sandboxUrl = createSandbox(currentSnap[0].text)
            window.location.replace(sandboxUrl)
        } 
    }

    useEffect(() => {
        if (playing) {
            const interval = setInterval(() => {
                setCurrentPlayTime(props.audio.currentTime);
                if (props.audio.duration === props.audio.currentTime) {
                    setPlaying(false);
                }
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [playing])

    return (
        <>
            <PreviewSpace snapshots={props.snapshots} currentTime={currentPlayTime}/>
            <SharePane>
                <ShareButton title="Open in CodeSandbox" onClick={sendToSandbox}><img src={CodeSandboxLogo} alt="Open in CodeSandbox" /></ShareButton>
                <ShareButton title="Download this snapshot" onClick={downloadSnapshot}><img src={DownloadFileIcon} alt="Download" /></ShareButton>
            </SharePane>

            <PreviewButtons>
                <PreviewButton details={{type: "backward", action: backwardPreview}} />
                <PreviewButton details={{type: "play", action: playPreview}} />
                <PreviewButton details={{type: "forward", action: forwardPreview}} />
            </PreviewButtons>

            

        </>
    )
}


const PreviewButtons = styled.div`
    width: 92%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SharePane = styled.div`
    width: 92%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding:10px 0.2px;
    background-color:#1E1E1E;
    
`;

const ShareButton = styled.button`
    background:transparent;
    height:40px;
    margin:0 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    border-radius:5px;
    cursor:pointer;

    img{
        max-wdith:100%;
        max-height:100%;
    }
`