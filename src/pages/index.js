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
          <StaticImage
            className='hero-image'
            style={{ position: 'absolute' }}
            src='../images/hero.jpg'
            alt='image'
            objectPosition='50% 70%'
          />
          <div className='hero-overlay' />
        </div>
        <div className='hero-text'>
          <div className='hero-info'>
            <h1>Margarita & Betrand</h1>
            <div className='hero-tag'>
              <h2>se marient</h2>
            </div>
            <h4>Rendez-vous le 23 Juillet 2023 au Chateau le Cherreau</h4>
          </div>
        </div>
        <img className='hero-flower-left' src='/flowers/flower2.svg' />
        <img className='hero-flower-right' src='/flowers/flower2.svg' />
      </div>
      <div className='celebration with-margins'>
        <div className='celebration-text'>
          <h3>{t('Nous célébrons notre mariage et nous voulons que vous nous accompagniez !')}</h3>
          <p>
            {t(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, non integer nunc nisl. Hendrerit suspendisse mauris posuere facilisis diam pulvinar nunc cras. Iaculis in dignissim morbi nisi, nec massa netus enim egestas. Tortor libero vitae viverra dictum at pharetra volutpat libero.'
            )}
          </p>
          <div className='indications'>
            <a href='https://goo.gl/maps/ZCx2fJgo2KBT6KVc7' target='_blank' rel='noreferrer'>
              <div className='indication'>
                <img src='/icons/position.svg' alt='position' />
                <p className='semibold'>Château le Chereau</p>
              </div>
            </a>
            <div className='indication'>
              <img src='/icons/calendar.svg' alt='date' />
              <p className='semibold'>{t('Samedi 3 juin 2023')}</p>
            </div>
          </div>
          <button>{t('Je serais présent.e !')}</button>
        </div>
        <StaticImage className='celebration-image border-secondary' src='../images/home.jpeg' />
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
