import React from 'react';
import Layout from '../layouts';
import { Trans, useTranslation } from 'react-i18next';
import { graphql, Link } from 'gatsby';
import './index.css';
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className='hero'>
        <div className='hero-image-container'>
          <StaticImage className='hero-image' style={{ position: 'absolute' }} src='../images/hero.jpeg' alt='image' />
          {/* <img id='core' src='/flowers/core2.svg' alt='core' />
          <img id='orange' src='/flowers/orange.svg' alt='orange' />
          <img id='light' src='/flowers/light.svg' alt='light' /> */}
        </div>
        <div className='hero-text'>
          <div className='hero-info'>
            <h2>23.07.23</h2>
            <h1>
              Margarita &<br /> Bertrand
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
