import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import styles from "./videoList.module.css";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  embedUrl: string;
};

type VideoListProps = {
  onSelect: (video: { embedUrl: string; title: string }) => void;
};

const getMockVideos = async (): Promise<Video[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
      {
        id: "1",
        title: "Como WebHooks funcionam",
        thumbnail: "https://img.youtube.com/vi/oQaJn6RdA3g/hqdefault.jpg",
        channel: "ByteMonk",
        embedUrl:
          "https://www.youtube.com/embed/oQaJn6RdA3g?si=z7d31lbvuFl-rp4l",
      },
      {
        id: "2",
        title: "React JS para Iniciantes",
        thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
        channel: "Programming with Mosh",
        embedUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
      },
      {
        id: "3",
        title: "Aprenda TypeScript do zero!",
        thumbnail: "https://img.youtube.com/vi/BwuLxPH8IDs/hqdefault.jpg",
        channel: "Academind",
        embedUrl: "https://www.youtube.com/embed/BwuLxPH8IDs",
      },
      {
        id: "4",
        title: "Node.js para Iniciantes",
        thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
        channel: "Programming with Mosh",
        embedUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
      },
      {
        id: "5",
        title: "React Query - Tutorial Completo",
        thumbnail: "https://img.youtube.com/vi/8K1N3fE-cDs/hqdefault.jpg",
        channel: "Cosden Solutions",
        embedUrl: "https://www.youtube.com/embed/8K1N3fE-cDs",
      },
    ];
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error);
    throw error;
  }
};

const VideoList = ({ onSelect }: VideoListProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["videos"],
    queryFn: getMockVideos,
  });

  if (isLoading) return <p>Carregando vídeos...</p>;
  if (error) return <p>Erro ao carregar vídeos</p>;

  return (
    <div className={styles.listDiv}>
      <h2>Sua Lista de Vídeos</h2>
      <ul className={styles.ul}>
        {data &&
          data.map((video) => (
            <li
              key={video.id}
              className={styles.li}
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
                <h3>{video.title}</h3>
                <p>{video.channel}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default VideoList;
