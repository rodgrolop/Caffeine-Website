import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

const VITE_GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT;

const token = localStorage.getItem("token");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const graphQLClient = new GraphQLClient(VITE_GRAPHQL_ENDPOINT);

graphQLClient.setHeader(`authorization`, token ? `Bearer ${token}` : "");

export { queryClient, graphQLClient };
