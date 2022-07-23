import client from "../client";
import imageUrlBuilder from '@sanity/image-url';

import styles from "./index.module.scss";

import { HeroSection } from "../components/heroSection";
import { CommericalTourers } from "../components/commericalTourers"
import { Navigation } from "../components/nav"

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = ({post}) => {
  console.log(post)
    return (
      <div class={styles.homepage}>
        <Navigation logo={post.pageBuilder[0]} />
        <HeroSection hero={post.pageBuilder[1]}  />
        <CommericalTourers commerical={post.pageBuilder[2]} tourers={post.pageBuilder[3]} />
      </div>
    )
}

export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const post = await client.fetch(`
  *[_type == "page"][0]
  {...,
  pageBuilder}`)
  return {
    props: {
      post
    }
  }
}

export default Index;