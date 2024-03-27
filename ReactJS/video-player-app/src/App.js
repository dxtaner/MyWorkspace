import React, { useState } from "react";
import Menu from "./components/Menu.js";
import Video from "./components/Video.js";
import { videos } from "./videoData.js";
import "./App.css";

const videoNames = Object.keys(videos);

function App() {
  const [videoSrc, setVideoSrc] = useState(videos.cat);

  function onSelectVideo(video) {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}

export default App;
