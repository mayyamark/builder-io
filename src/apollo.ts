import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import 'dotenv/config'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `https://cdn.builder.io/api/v1/graphql/${process.env.NEXT_PUBLIC_BUILDER_API_KEY!}`,
    }),
  });
});