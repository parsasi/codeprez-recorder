let isPaused = true;
let sec = 0;
let min = 0;

export default function timer(){
    const intervalCallback = () => {
        if(!isPaused){
            if(sec < 59){
                sec ++;
            }else if(sec >= 59){
                sec = 0
                min++
            }
        }
    }

    return setInterval(intervalCallback , 1000)
}

export const startTimer = () => {
    isPaused = false
} 


export const togglePauseTimer = () => {
    isPaused = !isPaused
} 

export const resetTimer = () => {
    sec = 0;
    min = 0;
    isPaused = true;
} 

export const getTime = () => {
    return {sec , min}
}

