import React from 'react';
import Layout from '../../layouts';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import './index.css';
import PageTitle, { Pages } from '../../components/pageTitle';
import { StaticImage } from 'gatsby-plugin-image';
import useIsVIP from '../../components/vipProvider';

const ScheduleDays = () => {
  const { t } = useTranslation();

  const { isVIP } = useIsVIP();

  return (
    <div className='days with-margins'>
      {isVIP && (
        <div className='day'>
          <div className='day-info'>
            <h4>{t('Vendredi 02 juin 2023')}</h4>
            <div className='schedule-item'>
              <h5>{t('18h - Apéro dinatoire de bienvenue')}</h5>
              <a href='https://goo.gl/maps/VY3uuYTJRAfR8kT97' target='_blank' rel='noreferrer'>
                {t('Gîtes Les Poulitères, Montrieux-en-Sologne')}
              </a>
            </div>
          </div>
          <div className='day-image-container margin-left border-primary'>
            <StaticImage src='../../images/gite.jpg' className='day-image' alt='gite' />
          </div>
        </div>
      )}
      <div className='day' style={{ flexDirection: 'row-reverse' }}>
        <div className='day-info'>
          <h4>{t('Samedi 03 juin 2023')}</h4>
          <div className='schedule-item'>
            <h5>{t('14h30 - Cérémonie religieuse')}</h5>
            <a href='https://goo.gl/maps/sZBKM5ePgKBqCbpL7' target='_blank' rel='noreferrer'>
              {t('Cathédrale Saint-Louis de Blois, 7B Pl. Saint-Louis, 41000 Blois')}
            </a>
          </div>
          <div className='schedule-item'>
            <h5>{t('17h - Réception')}</h5>
            <a href='https://goo.gl/maps/8Ff4LE4B6suPcSuv7' target='_blank' rel='noreferrer'>
              {t('Château le Chereau, Montrieux-en-Sologne')}
            </a>
          </div>
        </div>
        <div className='day-image-container margin-right border-secondary'>
          <StaticImage src='../../images/location.jpg' className='day-image' alt='gite' />
        </div>
        <img className='schedule-flower' src='/flowers/flower1.svg' alt='flower' />
      </div>
      {isVIP && (
        <div className='day'>
          <div className='day-info'>
            <h4>{t('Dimanche 04 juin 2023')}</h4>
            <div className='schedule-item'>
              <h5>{t('11h - Brunch après mariage')}</h5>
              <a href='https://goo.gl/maps/8Ff4LE4B6suPcSuv7' target='_blank' rel='noreferrer'>
                {t('Château le Chereau, Montrieux-en-Sologne')}
              </a>
            </div>
          </div>
          <div className='day-image-container margin-left border-primary'>
            <StaticImage src='../../images/brunch.png' className='day-image' alt='gite' />
          </div>
        </div>
      )}
    </div>
  );
};

export default function Schedule() {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageTitle t={t} page={Pages.Schedule} />
      <ScheduleDays />
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
