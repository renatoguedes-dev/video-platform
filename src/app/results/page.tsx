import Header from "@/app/components/Header/Header";
import ResultsContent from "../components/ResultsContent/ResultsContent";

interface ParamsProps {
  searchParams: {
    search_query?: string;
  };
}

const ResultsPage = async ({ searchParams }: ParamsProps) => {
  const { search_query } = await searchParams;

  return (
    <div className="content">
      <Header />
      <ResultsContent searchText={search_query} />
    </div>
  );
};

export default ResultsPage;
