import { Contact } from 'components/Contact';
import { PersonalInformation } from 'components/PersonalInformation';
import { HomeLayout } from 'layouts/HomeLayout';
import { Experiences } from './Experiences';
import { Skills } from './Skills';
import { Studies } from './Studies';

import styles from './Home.module.css';

function Home({ jobs, studies }) {
  return (
    <HomeLayout>
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
        <section className={styles.contact}>
          <Contact />
        </section>
      </main>
    </HomeLayout>
  );
}

export { Home };
