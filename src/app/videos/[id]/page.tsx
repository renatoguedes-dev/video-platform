import Header from "@/app/components/Header/Header";
import VideoByIdContent from "@/app/components/VideoByIdContent/VideoByIdContent";

interface ParamsProps {
  params: {
    id: string;
  };
}

const VideoByIdPage = async ({ params }: ParamsProps) => {
  const { id } = await params;

  return (
    <div className="content">
      <Header />
      <VideoByIdContent videoId={id} />
    </div>
  );
};

export default VideoByIdPage;
