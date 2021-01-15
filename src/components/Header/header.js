import React from 'react';

import styles from './header.module.scss';

const Header = () => (
  <header>
    <h1 className={styles.headerTitle}>Unsplash</h1>
    <p className={styles.headerTitleParagraph}>
      The internet’s source of&nbsp;
      <span className={styles.paragraphUnderline}>freely-usable images</span>.
    </p>
    <p className={styles.headerTitleParagraph}>Powered by creators everywhere.</p>
  </header>
);

export default Header;
