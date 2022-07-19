import React from 'react';
import Layout from '../layouts';
import { Trans, useTranslation } from 'react-i18next';
import { graphql, Link } from 'gatsby';
import './index.css';
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout hideHeader>
      <div className='hero'>
        <div className='hero-text'>
          <div className='hero-info'>
            <div className='hero-links'>
              <div>
                <Link to='/history'>Notre histoire</Link>
                <a href='https://www.google.com' target='_blank' rel='noreferrer'>
                  Je confirme ma présence
                </a>
                <Link to='/access&housing'>Accès & logement</Link>
              </div>
              <div>
                <Link to='/schedule'>Programme</Link>
                <Link to='/q&a'>FAQ</Link>
                <Link to='/present'>Cadeaux</Link>
              </div>
            </div>
            <div>
              <h4>23.07.23</h4>
              <h1>
                Margarita &<br /> Bertrand
              </h1>
            </div>
          </div>
        </div>
        <div className='hero-image-container'>
          <StaticImage className='hero-image' src='../images/hero.jpeg' alt='image' />
          <div className='hero-image-dark' />
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
