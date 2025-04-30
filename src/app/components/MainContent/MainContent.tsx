"use client";

import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from "./mainContent.module.css";
import VideoList from "../VideoList/VideoList";

const MainContent = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    embedUrl: string;
    title: string;
  } | null>(null);

  return (
    <div className={styles.main}>
      <div className={styles.VideoDiv}>
        {selectedVideo && (
          <>
            <h1 className={styles.videoTitle}>{selectedVideo.title}</h1>
            <VideoPlayer
              embedUrl={selectedVideo.embedUrl}
              title={selectedVideo.title}
            />
          </>
        )}
      </div>

      <div>
        <VideoList
          selectedVideo={selectedVideo}
          onSelect={setSelectedVideo}
          onLoadFirstVideo={(video) => setSelectedVideo(video)}
        />
      </div>
    </div>
  );
};

export default MainContent;
