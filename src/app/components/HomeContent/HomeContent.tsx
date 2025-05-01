"use client";

import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoList from "../VideoList/VideoList";
import Link from "next/link";

const HomeContent = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    embedUrl: string;
    title: string;
  } | null>(null);

  return (
    <div className="pageContent">
      <div className="linkDiv">
        <Link href={"/favorites"} className="favoritesLink">
          <p>Acessar vídeos favoritos</p>
        </Link>
      </div>

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
            isFavoriteList={false}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
