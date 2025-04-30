"use client";

import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from "./homeContent.module.css";
import VideoList from "../VideoList/VideoList";
import Link from "next/link";

const HomeContent = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    embedUrl: string;
    title: string;
  } | null>(null);

  return (
    <div className={styles.pageContent}>
      <Link href={"/favorites"} className={styles.favoritesLink}>
        <p>Acessar músicas favoritas</p>
      </Link>

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
    </div>
  );
};

export default HomeContent;
