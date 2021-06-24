import { ApolloClient, InMemoryCache } from '@apollo/client';

import * as queries from './queries';

const ApiClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_URL,
  cache: new InMemoryCache(),
});

export { ApiClient, queries };
