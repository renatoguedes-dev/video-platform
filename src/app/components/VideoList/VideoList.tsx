import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import styles from "./videoList.module.css";
import { useEffect } from "react";
import { IVideoList } from "@/app/interfaces/VideoList";
import {
  getFavoritesVideoList,
  getVideoList,
  updateFavoriteVideo,
} from "@/app/axios";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const VideoList = ({
  selectedVideo,
  onSelect,
  onLoadFirstVideo,
  isFavoriteList,
}: IVideoList) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: [`${isFavoriteList ? "favorite videos" : "videos"}`],
    queryFn: isFavoriteList ? getFavoritesVideoList : getVideoList,
  });

  const toggleFavorite = async (id: string, favoriteStatus: boolean) => {
    await updateFavoriteVideo(id, !favoriteStatus);

    queryClient.invalidateQueries({ queryKey: ["videos"] });
    queryClient.invalidateQueries({ queryKey: ["favorite videos"] });
  };

  useEffect(() => {
    if (onLoadFirstVideo) {
      if (data && data.length > 0) {
        if (
          !selectedVideo ||
          selectedVideo.embedUrl !== data[0].embedUrl ||
          selectedVideo.title !== data[0].title
        ) {
          onLoadFirstVideo({
            embedUrl: data[0].embedUrl,
            title: data[0].title,
          });
        }
      } else {
        if (
          selectedVideo &&
          (selectedVideo.embedUrl !== "" || selectedVideo.title !== "")
        ) {
          onLoadFirstVideo({ embedUrl: "", title: "" });
        }
      }
    }
  }, [data, onLoadFirstVideo, selectedVideo]);

  if (isLoading) return <p>Carregando vídeos...</p>;
  if (error) return <p>Erro ao carregar vídeos</p>;

  return (
    <div className={styles.listDiv}>
      <h2 className={styles.listText}>
        {isFavoriteList ? "Seus Vídeos Favoritos" : "Sua Lista de Vídeos"}
      </h2>
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
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(video.id, video.favorite);
                  }}
                >
                  <FavoriteButton isFavorite={video.favorite} />
                </div>

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

        {data && data.length < 1 && <p>Você ainda não tem favoritos</p>}
      </ul>
    </div>
  );
};

export default VideoList;
