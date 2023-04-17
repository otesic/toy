import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import RecordRTC, { invokeSaveAsDialog } from "recordrtc";
import { useNavigate } from "react-router-dom";

function RTC() {
  const [stream, setStream] = useState<any>(null);
  const [blob, setBlob] = useState<any>(null);
  const refVideo = useRef<any>(null);
  const recorderRef = useRef<any>(null);

  const handleRecording = async () => {
    // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        width: 1920,
        height: 1080,
        frameRate: 30,
      },
      audio: false,
    });

    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, { type: "video" });
    recorderRef.current.startRecording();
  };

  const handleStop = () => {
    recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
    });
  };

  const handleSave = () => {
    invokeSaveAsDialog(blob);
  };

  const navi = useNavigate();
  const goMain = () => {
    navi("/");
  };

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }

    // refVideo.current.srcObject = stream;
  }, [stream, refVideo]);

  return (
    <div>
      <header>
        <button onClick={goMain}>메인가기</button>
        <button onClick={handleRecording}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleSave}>save</button>
        {blob && (
          <video
            src={URL.createObjectURL(blob)}
            controls
            autoPlay
            ref={refVideo}
            style={{ width: "700px", margin: "1em" }}
          />
        )}
      </header>
    </div>
  );
}

export default RTC;
