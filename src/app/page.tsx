"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import EntityList from "./components/EntityList";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <main className="min-h-screen bg-gray-50 py-8">
          <EntityList />
        </main>
      </QueryClientProvider>
    </JotaiProvider>
  );
}
