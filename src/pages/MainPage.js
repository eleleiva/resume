import React from 'react';

import { PersonalInformation } from 'components/PersonalInformation';
import { Skills } from 'components/Skills';
import { Experiences } from 'components/Experiences';
import { Studies } from 'components/Studies';
import { MainLayout } from 'layouts/MainLayout';

import styles from './MainPage.module.css';

function MainPage() {
  return (
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
  );
}

export { MainPage };
