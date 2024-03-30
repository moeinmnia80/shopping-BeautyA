import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Layout from "@layouts/Layout";
import Router from "@router/Router";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Layout>
            <Router />
          </Layout>
        </ApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
