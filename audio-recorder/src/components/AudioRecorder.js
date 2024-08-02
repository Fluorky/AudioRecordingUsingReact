// src/components/AudioRecorder.js

import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [blobURL, setBlobURL] = useState('');

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    setBlobURL(recordedBlob.blobURL);
    postAudio(recordedBlob.blob);
  };

  const postAudio = (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'audio.wav');

    fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Audio Recorder</h1>
      <ReactMic
        record={recording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081" />
      <div>
        <button onClick={startRecording} type="button">Start</button>
        <button onClick={stopRecording} type="button">Stop</button>
      </div>
      <audio src={blobURL} controls="controls" />
    </div>
  );
};

export default AudioRecorder;
