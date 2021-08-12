import { MDXProvider } from '@mdx-js/react';

import { OtterImage } from 'components/OtterImage';
import { PersonalInformation } from 'components/PersonalInformation';
import { SEO } from 'components/SEO';
import { components } from 'utils/mdComponents';

import styles from './BlogLayout.module.css';

function BlogLayout({ children, title }) {
  return (
    <div className={styles.container}>
      <SEO title={title} />
      <aside className={styles.aside}>
        <PersonalInformation />
      </aside>
      <main className={styles.blogLayout}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <footer className={styles.otter}>
        <OtterImage />
      </footer>
    </div>
  );
}

export { BlogLayout };
