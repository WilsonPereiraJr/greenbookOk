import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Router from "./componentes/Router";

const client = new ApolloClient({
  uri: "https://greenbook.filipelopes.med.br/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <div className="container">
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </div>
  );
}
