//Follow the pattern below to use the useRecorder hook


// const playback = (url) => {
//     const audio = new Audio(url);
//     audio.play();
//   };

//   const recorder = useRecorder(playback);

//   return (
//     <div className="App">
//       <button onClick={recorder.start}>Record</button>
//       <button onClick={recorder.stop}>stop</button>
//       <button onClick={recorder.pause}>Pause</button>
//     </div>
//   );



import { useEffect, useState } from "react";
export default function useRecorder(onStop) {
  const [mediaRecorder, setMediaRecorder] = useState();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => setMediaRecorder(new MediaRecorder(stream)))
      .catch((e) => {
        console.log(e);
      });

    return setMediaRecorder();
  }, [navigator]);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();

      const audioChunks = [];
      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        onStop(URL.createObjectURL(audioBlob));
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  const togglePause = () => {
    if (mediaRecorder) {
      if (mediaRecorder.state === "paused") {
        mediaRecorder.resume();
      } else if (mediaRecorder.state === "recording") {
        mediaRecorder.pause();
      }
    }
  };

  return {
    start: startRecording,
    stop: stopRecording,
    pause: togglePause,
    mediaRecorder
  };
}
