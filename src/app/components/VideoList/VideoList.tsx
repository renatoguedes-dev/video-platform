import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import styles from "./videoList.module.css";
import { useEffect } from "react";
import { IVideo } from "@/app/interfaces/Video";
import { IVideoList } from "@/app/interfaces/VideoList";


const getMockVideos = async (): Promise<IVideo[]> => {
  const res = await fetch("/api/videos");

  if (!res.ok) {
    throw new Error("Erro ao buscar vídeos");
  }

  return res.json();
};

const VideoList = ({
  selectedVideo,
  onSelect,
  onLoadFirstVideo,
}: IVideoList) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["videos"],
    queryFn: getMockVideos,
  });

  useEffect(() => {
    if (data && data.length > 0 && onLoadFirstVideo && !selectedVideo) {
      onLoadFirstVideo({ embedUrl: data[0].embedUrl, title: data[0].title });
    }
  }, [data, onLoadFirstVideo, selectedVideo]);

  if (isLoading) return <p>Carregando vídeos...</p>;
  if (error) return <p>Erro ao carregar vídeos</p>;

  return (
    <div className={styles.listDiv}>
      <h2 className={styles.listText}>Sua Lista de Vídeos</h2>
      <ul className={styles.ul}>
        {data &&
          data.map((video) => {
            const isCurrentVideo =
              selectedVideo?.embedUrl === video.embedUrl &&
              selectedVideo?.title === video.title;

            return (
              <li
                key={video.id}
                className={`${styles.li} ${
                  isCurrentVideo ? styles.currentVideo : ""
                }`}
                onClick={() =>
                  onSelect({ embedUrl: video.embedUrl, title: video.title })
                }
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={120}
                    height={84}
                  />
                </div>

                <div>
                  <h3 className={styles.videoTextTitle}>{video.title}</h3>
                  <p>{video.channel}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default VideoList;
