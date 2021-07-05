import { ApolloClient, InMemoryCache } from '@apollo/client';

import * as queries from './queries';

const CMSClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_URL,
  cache: new InMemoryCache(),
});

export { CMSClient, queries };
