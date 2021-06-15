import Head from 'next/head';
import ReactGA from 'react-ga';

function SEO() {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_KEY);
  ReactGA.pageview('/');

  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/l.png" />
      <meta name="theme-color" content="#eee" />
      <meta name="description" content="Luca Leiva's resume" />
      <link rel="apple-touch-icon" href="/l.png" />

      <link rel="manifest" href="/manifest.json" />

      <title>Luca Leiva</title>
      <meta name="description" content="Luca Leiva resume" />
    </Head>
  );
}

export { SEO };
