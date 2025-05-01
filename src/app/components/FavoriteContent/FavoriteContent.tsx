"use client";

import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Link from "next/link";
import VideoList from "../VideoList/VideoList";
import { useQuery } from "@tanstack/react-query";
import { getFavoritesVideoList } from "@/app/axios";

const FavoriteContent = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    embedUrl: string;
    title: string;
  } | null>(null);

  const { data } = useQuery({
    queryKey: ["favorite videos"],
    queryFn: getFavoritesVideoList,
  });

  return (
    <div className="pageContent">
      <div className="linkDiv">
        <Link href={"/"} className="favoritesLink">
          <p>Voltar à página inicial</p>
        </Link>
      </div>

      <h1>Vídeos Favoritos</h1>

      <div className="main">
        {data && data.length < 1 ? (
          <h3>Adicione vídeos aos favoritos para exibi-los aqui</h3>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default FavoriteContent;
