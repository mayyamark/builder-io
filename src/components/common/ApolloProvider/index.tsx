'use client';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

interface CustomApolloProviderProps {
  children?: React.ReactNode;
}

const apolloClient = new ApolloClient({
  uri: `https://cdn.builder.io/api/v1/graphql/${process.env.NEXT_PUBLIC_BUILDER_API_KEY!}`,
  cache: new InMemoryCache(),
});

const CustomApolloProvider: React.FC<CustomApolloProviderProps> = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    {children}
  </ApolloProvider>
);

export default CustomApolloProvider;
