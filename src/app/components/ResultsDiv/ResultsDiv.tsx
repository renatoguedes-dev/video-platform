/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { IResultsDiv } from "@/app/interfaces/ResultsDiv";
import styles from "./resultsDiv.module.css";
import { Box, Paper } from "@mui/material";

const ResultsDiv = ({ searchResults }: IResultsDiv) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    console.log(`id é ${id}`);
    router.push(`/videos/${id}`);
  };

  const shouldSearch =
    searchResults && searchResults?.length > 0 ? true : false;

  return (
    <Paper
      component="div"
      sx={{
        alignItems: "center",
        flex: 1,
      }}
      className={`${styles.resultsDiv} ${
        shouldSearch ? styles.show : styles.hide
      } paper-component`}
    >
      {shouldSearch && (
        <Box className={styles.resultsWrapper}>
          {searchResults?.map((result) => (
            <div
              key={result.id}
              className={styles.individualResult}
              onClick={() => handleClick(result.id)}
            >
              <img
                className={styles.miniImage}
                src={result.thumbnail}
                alt={result.title}
              />
              <p>{result.title}</p>
            </div>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default ResultsDiv;
