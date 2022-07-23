import client from "../client";
import React, { useState } from "react";

import imageUrlBuilder from '@sanity/image-url';

import styles from './nav.module.scss';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export const Navigation = ({ logo}) => {
  return (
    <>
    <nav className={styles.navigation}>
    <ul>
      <li>COMMERCIAL</li>
      <li>TOURERS</li>
      <li><img src={urlFor(logo.image)} /></li>
      <li>OUR HISTORY</li>
      <li>GET IN TOUCH</li>
    </ul>
  </nav>
  <nav className={styles.navigationMobile}>
    <ul>
      <li><img src={urlFor(logo.image)} /></li>
      <li>MENU</li>
    </ul>
  </nav>
  </>
  );
};
