import { keysToCamelCase } from 'utils/object';

const baseObject = {
  baseURL: `${process.env.NEXT_PUBLIC_SERVERLESS_API}`,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

const httpClient = {
  post: async ({ url = '', body = {}, headers = {} }) => {
    const response = await fetch(`${baseObject.baseURL}${url}`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: { ...baseObject.headers, ...headers },
    });
    const responseAsJSON = await response.json();

    return keysToCamelCase(responseAsJSON);
  },
};

export { httpClient };
