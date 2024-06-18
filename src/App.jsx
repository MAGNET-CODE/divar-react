import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Router from "router/Router";
import defaultOptions from "configs/reacatQuery";
import Layout from "layouts/Layout";

function App() {
  const queryClient = new QueryClient({defaultOptions});
  return (
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Layout>
          <Router />
          <Toaster />
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );

}

export default App;
