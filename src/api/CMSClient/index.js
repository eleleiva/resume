import { ApolloClient, InMemoryCache } from '@apollo/client';

import * as queries from './queries';

const CMSClient = new ApolloClient({
  uri: process.env.CMS_URL,
  headers: {
    ...(process.env.CMS_API_TOKEN
      ? { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` }
      : {}),
  },
  cache: new InMemoryCache(),
});

export { CMSClient, queries };
