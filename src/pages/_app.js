import { Analytics } from '@vercel/analytics/react';

import './app.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
