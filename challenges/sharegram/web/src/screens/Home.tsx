import * as React from "react";

import Header from "../components/Header/Header";
import Feed from "../components/Feed/Feed";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const Home = () => (
  <>
    <ApolloProvider client={client}>
      <Header />
      <div className="feed-container">
        <Feed />
      </div>
    </ApolloProvider>
  </>
);

export default Home;
