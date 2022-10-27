import { Ubuntu } from '@next/font/google';

import { AnalyticsWrapper } from 'components/AnalyticsWrapper';
import { SEO } from 'components/SEO';

import './app.css';

const ubuntu = Ubuntu({ weight: '400', preload: true });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SEO />
      </head>
      <body className={ubuntu.className}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
