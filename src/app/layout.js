"use client";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <title>News API React Js Assignment</title>
        </head>
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
