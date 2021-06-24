import Head from 'next/head';
import Script from 'next/script';

function SEO() {
  return (
    <>
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
      <Script
        data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_KEY}
        src={process.env.NEXT_PUBLIC_ANALYTICS_URL}
      />
    </>
  );
}

export { SEO };
