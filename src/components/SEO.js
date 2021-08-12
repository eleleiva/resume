import Head from 'next/head';
import Script from 'next/script';

function SEO({ title }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#eee" />
        <meta name="description" content="Luca Leiva - Personal site" />

        <link rel="icon" href="/l.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/l.png" />

        <title>{`Luca Leiva${title ? ` - ${title}` : ''}`}</title>
      </Head>
      <Script
        data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_KEY}
        src={process.env.NEXT_PUBLIC_ANALYTICS_URL}
      />
    </>
  );
}

export { SEO };
