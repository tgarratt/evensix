import React, { useState } from "react";

import styles from './heroSection.module.scss';

export const HeroSection = ({ hero }) => {
    console.log(hero);
  return (
    <div className={styles.hero}>
        <div className={styles.hero_text}>
        <h1>{hero.heading}</h1>
        <p>{hero.tagline}</p>
        <a><p className={styles.hero_text_button}>Create your own</p></a>
        </div>

    </div>
  );
};
