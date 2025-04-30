interface VideoPlayerProps {
  embedUrl: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  allowFullScreen?: boolean;
}

const VideoPlayer = ({
  embedUrl,
  title = "Vídeo incorporado",
  width = "100%",
  height = 450,
  allowFullScreen = true,
}: VideoPlayerProps) => {
  return (
    <iframe
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
