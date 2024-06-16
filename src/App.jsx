import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "router/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import defaultOptions from "configs/reacatQuery";
import Layout from "layouts/Layout";

function App() {
  const queryClient = new QueryClient({defaultOptions});
  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );

}

export default App;
