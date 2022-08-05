import React from 'react';
import Layout from '../../layouts';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import './index.css';
import PageTitle, { Pages } from '../../components/pageTitle';
import { StaticImage } from 'gatsby-plugin-image';

const HistoryItem = ({ reverse, title, description, color }) => {
  return (
    <div
      className='history-card-container'
      style={reverse ? { paddingRight: '5vw', display: 'flex', justifyContent: 'flex-end' } : { paddingLeft: '5vw' }}
    >
      <svg
        style={reverse ? { right: '-1px', transform: 'translate(+50%, -50%)' } : { left: '1px', transform: 'translate(-50%, -50%)' }}
        className='history-icon'
        width='51'
        height='51'
        viewBox='0 0 51 51'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='25.5' cy='25.5' r='24.5' fill='#FFF4E9' stroke={color} stroke-width='2' />
        <path
          d='M33.0923 30.1243C35.411 30.4586 43.0755 29.312 44.7715 26.6203C44.6703 25.5249 38.3654 23.0182 33.6823 23.2444C36.2248 22.001 41.4779 16.0116 41.0604 13.0682C33.3688 13.3741 31.0814 17.7643 28.4477 20.7248C28.784 17.5708 30.0767 12.8804 27.5727 8.89839C24.1808 9.79893 22.4877 16.2791 22.2953 20.567C17.397 14.6914 11.4014 13.2019 10.7059 14.7C9.90639 16.0941 14.9158 23.3525 20.5024 25.3527C14.94 25.3044 8.82043 26.0641 6.22949 30.1556C8.93017 33.2427 18.3134 30.7374 21.3048 29.44C19.6132 32.4332 18.188 40.8183 20.5224 42.1016C24.1181 41.8953 27.0054 35.6143 26.2031 31.3278C29.4054 36.9061 35.1018 40.3887 36.7991 39.6873C37.6913 36.098 35.1916 33.1659 33.0923 30.1243Z'
          fill={color}
        />
        <path
          d='M23.3037 27.0442C21.3626 24.3838 24.8642 21.9625 27.0946 24.3468C29.6699 27.1082 25.3089 29.7984 23.3037 27.0442Z'
          fill='#FAD51B'
        />
      </svg>
      <div className='history-card'>
        <div className='history-title' style={{ backgroundColor: color }}>
          <p className='semibold'>{title}</p>
        </div>
        <small>{description}</small>
      </div>
    </div>
  );
};

export default function History() {
  const { t } = useTranslation('history');

  return (
    <Layout>
      <PageTitle t={t} page={Pages.History} />
      <h4 className='history-intro'>
        {t("Comme une image vaut mieux que mille mots. Voici le résumé de notre vie commune jusqu'à aujourd'hui...")}
      </h4>
      <div className='history with-margins'>
        <div className='line' />
        <div className='start-dash' />
        <div className='history-items'>
          <div className='history-item' style={{ marginTop: '30px' }}>
            <StaticImage style={{ marginRight: '7vw' }} src='../../images/match.png' className='border-primary history-image' alt='match' />
            <HistoryItem
              title={t('08.11.2020 - La rencontre')}
              description={t('On a fait « match »: Margarita à Tours - Bertrand à Blois')}
              color='#f2552c'
            ></HistoryItem>
          </div>
          <div className='history-item reverse'>
            <StaticImage
              style={{ marginLeft: '7vw' }}
              src='../../images/confinement.png'
              className='border-secondary  history-image'
              alt='confinement'
            />
            <HistoryItem
              reverse
              title={t('04.12.2020 - Premier rencard')}
              description={t('Confinés, Bertrand vient à Tours pour voir Margarita. Nous avons bu du vin chaud et du Bonnezeaux 2014')}
              color='#f5b614'
            ></HistoryItem>
          </div>
          <div className='history-item'>
            <StaticImage
              style={{ marginRight: '7vw' }}
              src='../../images/saintpierre.png'
              className='border-tertiary  history-image'
              alt='saintpierre'
            />
            <HistoryItem
              title={t('25.12.2020 - Noël')}
              description={t('Premier Noël ensemble à Saint Pierre de Jards avec toute la famille de Bertrand')}
              color='#468030'
            ></HistoryItem>
          </div>
          <div className='history-item reverse'>
            <StaticImage style={{ marginLeft: '7vw' }} src='../../images/ski.png' className='border-quaternary  history-image' alt='ski' />
            <HistoryItem
              reverse
              title={t('27.02.2021 - Premières vacances')}
              description={t('Le sommet du Mont-Dore à pied')}
              color='#a81950'
            ></HistoryItem>
          </div>
          <div className='history-item'>
            <StaticImage
              style={{ marginRight: '7vw' }}
              src='../../images/demenagement.png'
              className='border-primary  history-image'
              alt='demenagement'
            />
            <HistoryItem
              title={t('31.07.2021 - Emménagement')}
              description={t('Premier emmenagement ensemble à Blois')}
              color='#f2552c'
            ></HistoryItem>
          </div>
          <div className='history-item reverse'>
            <StaticImage
              style={{ marginLeft: '7vw' }}
              src='../../images/fiancaille.png'
              className='border-secondary  history-image'
              alt='fiancailles'
            />
            <HistoryItem
              reverse
              title={t('19.03.2022 - Les fiançailles')}
              description={t("Fiançailles, en face de la Cathédrale d'Orléans")}
              color='#f5b614'
            ></HistoryItem>
          </div>
          <div className='history-item'>
            <StaticImage
              style={{ marginRight: '7vw' }}
              src='../../images/colombie.png'
              className='border-tertiary  history-image'
              alt='colombie'
            />
            <HistoryItem color='#468030' title={t('08.04.2022 - Colombie')} description={t('Premier voyage en Colombie')}></HistoryItem>
          </div>
          <div className='history-item reverse'>
            <StaticImage
              style={{ marginLeft: '7vw' }}
              src='../../images/mariage.png'
              className='border-secondary  history-image'
              alt='mariage'
            />
            <HistoryItem
              reverse
              title={t('23.07.2022 - Mariage civil')}
              description={t('Mariage civil à Saint Pierre de Jards')}
              color='#f5b614'
            ></HistoryItem>
          </div>
        </div>
        <div className='end-dash' />
      </div>
      <div className='a-suivre'>
        <div>
          <img src='/flowers/flower3.svg' alt='flower' />
          <h3>{t('Un résumé en vidéo...')}</h3>
        </div>
        <div className='history-video'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/xqRfbdb604s'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
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
