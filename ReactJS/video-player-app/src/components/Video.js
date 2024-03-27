import React from "react";
import "./Video.css";

function Video(props) {
  return (
    <div className="video-player">
      <h2>Video Player</h2>
      <video loop controls autoPlay muted src={props.videoSrc} />
    </div>
  );
}

export default Video;
