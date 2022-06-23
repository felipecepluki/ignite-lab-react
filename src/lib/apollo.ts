import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oj9s4r0ame01z41asgc7bb/master",
  cache: new InMemoryCache(),
});
