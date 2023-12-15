import React, { useState } from "react";

import { CacheProvider } from "@emotion/react";
import {
  QueryClient,
  type QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReyStyledProvider } from "rey-mix";

import { createEmotionCache } from "./helpers/cache";

const clientSideEmotionCache = createEmotionCache();

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
};

function App() {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ReyStyledProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ReyStyledProvider>
    </CacheProvider>
  );
}

export default App;
