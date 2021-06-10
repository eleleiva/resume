import { library } from '@fortawesome/fontawesome-svg-core';

import { icons } from 'assets/icons';
import { Experiences } from 'components/Experiences';
import { PersonalInformation } from 'components/PersonalInformation';
import { SEO } from 'components/SEO';
import { Skills } from 'components/Skills';
import { Studies } from 'components/Studies';
import { MainLayout } from 'layouts/MainLayout';

import styles from './App.module.css';

library.add(icons);

function App() {
  return (
    <>
      <SEO />
      <MainLayout>
        <aside className={styles.personalInformation}>
          <PersonalInformation />
        </aside>
        <main className={styles.main}>
          <section className={styles.skills}>
            <Skills />
          </section>
          <section className={styles.experience}>
            <Experiences />
          </section>
          <section className={styles.studies}>
            <Studies />
          </section>
        </main>
      </MainLayout>
    </>
  );
}

export { App };
