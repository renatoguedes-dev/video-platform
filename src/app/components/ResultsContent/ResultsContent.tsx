/* eslint-disable @next/next/no-img-element */
"use client";

import { getVideoList } from "@/app/axios";
import { useSearch } from "@/app/contexts/SearchContext";
import { IResultsContent } from "@/app/interfaces/ResultsContent";
import { IVideo } from "@/app/interfaces/Video";
import getSearchResults from "@/app/utils/getSearchResults";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./resultsContent.module.css";
import { useRouter } from "next/navigation";

const ResultsContent = ({ searchText }: IResultsContent) => {
  const { data } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideoList,
  });

  const { searchResults, setSearchResults } = useSearch();
  const [copyResults, setCopyResults] = useState<IVideo[] | null>(null);

  const router = useRouter();

  const handleClick = (id: string) => {
    console.log("clicou");
    router.push(`/videos/${id}`);
  };

  useEffect(() => {
    if (!searchText) {
      return;
    }

    getSearchResults(data, searchText, setSearchResults);
  }, [searchText, data, setSearchResults]);

  useEffect(() => {
    if (!searchResults) {
      return;
    }

    setCopyResults(searchResults);
    setSearchResults(null);
  }, [searchResults, copyResults, setSearchResults]);

  return (
    <div className="pageContent">
      <div className="linkDiv">
        <Link href={"/"} className="favoritesLink">
          <p>Voltar à página inicial</p>
        </Link>
      </div>

      <div className="main">
        <div className={styles.parentDiv}>
          {copyResults &&
            copyResults?.length > 0 &&
            copyResults.map((result) => (
              <div
                key={result.id}
                className={styles.individualResultDiv}
                onClick={() => handleClick(result.id)}
              >
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className={styles.image}
                />

                <div>
                  <h2 className={styles.resultTitle}>{result.title}</h2>
                  <div>{result.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsContent;
