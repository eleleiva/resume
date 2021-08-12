import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

import picture from 'assets/images/ll.webp';
import { Emoji } from 'components/Emoji';
import { Nav } from './Nav';

import styles from './PersonalInformation.module.css';

function PersonalInformation() {
  return (
    <section>
      <article>
        <h1 className={styles.name}>Luca Leiva</h1>
        <RoughNotation type="underline" show padding={0}>
          <div className={styles.photoContainer}>
            <Image
              alt="Luca"
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              size="35vh"
              src={picture}
              priority
            />
          </div>
        </RoughNotation>
        <p className={styles.description}>
          Hey, my name is Luca
          <Emoji emoji="👋🏼" label="wave" />
          I&apos;m a web developer whose main focus is front-end development. I
          always try my best to improve users as well as developers experience
          in every project I lay hands on.
        </p>
        <p>
          <Emoji emoji="📍" label="pin" />
          Montevideo, Uruguay
          <Emoji emoji="🇺🇾" label="uruguayan flag" />
        </p>
      </article>
      <Nav />
    </section>
  );
}

export { PersonalInformation };
