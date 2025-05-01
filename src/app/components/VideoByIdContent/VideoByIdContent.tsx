"use client";

import Link from "next/link";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useQuery } from "@tanstack/react-query";
import { getVideoList } from "@/app/axios";

interface VideoByIdContentProps {
  videoId: string;
}

const VideoByIdContent = ({ videoId }: VideoByIdContentProps) => {
  const { data } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideoList,
  });

  const videoFound = data?.find((video) => video.id === videoId);

  return (
    <div className="pageContent">
      <div className="linkDiv">
        <Link href={"/"} className="favoritesLink">
          <p>Voltar à página inicial</p>
        </Link>
      </div>

      <div className="main">
        <div className="videoDiv">
          {videoFound && (
            <>
              <h1 className="videoTitle">{videoFound.title}</h1>
              <VideoPlayer
                embedUrl={videoFound.embedUrl}
                title={videoFound.title}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoByIdContent;
