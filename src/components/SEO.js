import Head from 'next/head';

import picture from 'assets/images/ll.webp';

function SEO() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/l.png" />
      <meta name="theme-color" content="#eee" />
      <meta name="description" content="Luca Leiva" />
      <link rel="apple-touch-icon" href="/l.png" />

      <link rel="manifest" href="/manifest.json" />

      <title>Luca Leiva</title>
      <meta property="og:title" content="Luca Leiva" />
      <meta
        property="og:description"
        content="Luca Leiva is a a web developer whose main focus is front-end development. He always try his best to improve users as well as developers' experience in every project he lays hands on."
      />
      <meta property="og:image" content={picture.src} />
    </Head>
  );
}

export { SEO };
