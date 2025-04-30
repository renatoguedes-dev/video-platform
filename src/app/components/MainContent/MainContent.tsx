"use client";

import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from "./mainContent.module.css";
import VideoList from "../VideoList/VideoList";

const MainContent = () => {
  const [selectedVideo, setSelectedVideo] = useState({
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Never Gonna Give You Up",
  });

  return (
    <div className={styles.main}>
      <div className={styles.VideoDiv}>
        <VideoPlayer
          embedUrl={selectedVideo.embedUrl}
          title={selectedVideo.title}
        />
        <h1>{selectedVideo.title}</h1>
      </div>

      <div>
        <VideoList onSelect={setSelectedVideo} />
      </div>
    </div>
  );
};

export default MainContent;
