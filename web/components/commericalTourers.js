import client from "../client";
import React, { useState } from "react";

import imageUrlBuilder from '@sanity/image-url';

import styles from './commericalTourers.module.scss';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export const CommericalTourers = ({ commerical, tourers}) => {
  return (
    <div className={styles.commericalTourers}>
        <div className={styles.commericalTourers_heading}>
            <h1>How will you use yours?</h1>
        </div>
        <div className={styles.commericalTourers_content}>
          <div className={styles.commericalTourers_content_commericalBlock}>
            <img src={urlFor(commerical.image)} />
            <h2>{commerical.heading}</h2>
            <p className={styles.commericalTourers_content_commericalBlock_tagline}>{commerical.tagline}</p>
            <a><p className={styles.commericalTourers_content_button}>Explore {commerical.heading}</p></a>
          </div>
          <div className={styles.commericalTourers_content_tourersBlock}>
            <img src={urlFor(tourers.image)} />
            <h2>{tourers.heading}</h2>
            <p className={styles.commericalTourers_content_commericalBlock_tagline}>{tourers.tagline}</p>
            <a><p className={styles.commericalTourers_content_button}>Explore {tourers.heading}</p></a>
          </div>
        </div>
    </div>
  );
};
