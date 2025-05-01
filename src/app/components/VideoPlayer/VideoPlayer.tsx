import styles from "./videoPlayer.module.css"
import { IVideoPlayer } from "@/app/interfaces/VideoPlayer";

const VideoPlayer = ({
  embedUrl,
  title = "Vídeo incorporado",
  width = "100%",
  height = "90%",
  allowFullScreen = true,
}: IVideoPlayer) => {
  return (
    <iframe
      className={styles.iframe}
      width={width}
      height={height}
      src={embedUrl}
      title={title}
      allowFullScreen={allowFullScreen}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoPlayer;
