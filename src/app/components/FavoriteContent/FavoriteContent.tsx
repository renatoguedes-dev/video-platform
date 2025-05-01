"use client";

import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from "./favoriteContent.module.css";
import Link from "next/link";
import VideoList from "../VideoList/VideoList";

const FavoriteContent = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    embedUrl: string;
    title: string;
  } | null>(null);

  return (
    <div className="pageContent">
      <div className="linkDiv">
        <Link href={"/"} className="favoritesLink">
          <p>Voltar à página inicial</p>
        </Link>
      </div>

      <h1>Músicas Favoritas</h1>

      <div className="main">
        <div className="videoDiv">
          {selectedVideo && (
            <>
              <h1 className="videoTitle">{selectedVideo.title}</h1>
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
            isFavoriteList={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteContent;
