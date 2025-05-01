import Header from "@/app/components/Header/Header";
import VideoByIdContent from "@/app/components/VideoByIdContent/VideoByIdContent";

interface ParamsProps {
  params: {
    id: string;
  };
}

const VideoByIdPage = ({ params }: ParamsProps) => {
  const { id } = params;

  return (
    <div className="content">
      <Header />
      <VideoByIdContent videoId={id} />
    </div>
  );
};

export default VideoByIdPage;
