import Image from 'next/image';

import otter from 'assets/images/otter.jpg';

import styles from './OtterImage.module.css';

function OtterImage() {
  return (
    <div className={styles.container}>
      <Image src={otter} className={styles.image} layout="fill" alt="Otter" />
    </div>
  );
}

export { OtterImage };
