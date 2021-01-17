import React , {useState , useEffect} from 'react'
import PreviewButton from '../../components/PreviewButton';
import PreviewSpace from '../../components/PreviewSpace';
import styled from 'styled-components'


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
    
    function playPreview() {
        if(props.audio){
            props.audio.play()
            setPlaying(true);
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