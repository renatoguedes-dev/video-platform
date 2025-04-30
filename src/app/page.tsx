'use client';

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import styles from "./page.module.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.content}>
        <Header />
        <MainContent />
      </div>
    </QueryClientProvider>
  );
}
