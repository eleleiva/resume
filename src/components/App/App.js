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

function App({ jobs, studies }) {
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
            <Experiences jobs={jobs} />
          </section>
          <section className={styles.studies}>
            <Studies studies={studies} />
          </section>
        </main>
      </MainLayout>
    </>
  );
}

export { App };
