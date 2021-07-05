import { httpClient } from './httpClient';

const email = {
  send: ({ body }) => {
    return httpClient.post({ url: '/email', body });
  },
};

export { email };
