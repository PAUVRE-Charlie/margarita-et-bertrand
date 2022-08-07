import React from 'react';
import Layout from '../../layouts';
import { Trans, useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import './index.css';
import PageTitle, { Pages } from '../../components/pageTitle';

export default function QA() {
  const { t } = useTranslation('qa');

  return (
    <Layout>
      <PageTitle t={t} page={Pages.QA} />
      <div className='questions with-margins'>
        <img className='question-flower' src='/flowers/flower1.svg' alt='flower' />
        <div className='question'>
          <div>
            <h4>{t('Quelle est la date limite pour confirmer ma présence ?')}</h4>
          </div>
          <small>{t('Le plus tôt possible, au plus tard le 31 janvier 2023')}</small>
        </div>
        <div className='question'>
          <div>
            <h4>{t('Les enfants sont-ils invités ?')}</h4>
          </div>
          <small>{t('Oui, bien-sûr, ils sont les bienvenus. Une baby-sitter sera présente pendant le cocktail')}</small>
        </div>
        <div className='question'>
          <div>
            <h4>{t('Le dress code ?')}</h4>
          </div>
          <small>
            {t(
              'Cocktail. Les hommes peuvent porter une cravate ou un nœud papillon. Pour les femmes on donnera des détails plus tard. Éviter les talons aiguille.'
            )}
          </small>
        </div>
        <div className='question'>
          <div>
            <h4>{t('La réception se déroulera-t-elle en intérieur ou en extérieur ?')}</h4>
          </div>
          <small>{t("Le vin d'honneur se déroulera en extérieur et le repas en intérieur.")}</small>
        </div>
        <div className='question'>
          <div>
            <h4>{t('Est-il possible de prendre de photos pendant le mariage ?')}</h4>
          </div>
          <small>
            {t(
              "Oui, vous pouvez prendre des photos et des vidéos avec vos téléphones et caméras. Mais, s'il vous plaît, évitez de partager des photos et vidéos des enfants dans les réseaux sociaux."
            )}
          </small>
        </div>
        <p className='instagramlink'>
          <Trans
            i18nKey='instagramLink'
            defaults="Si vous avez d'autres questions, vous pouvez nous les poser en envoyant un message sur <instaLink>ce compte instagram!</instaLink>"
            components={{
              instaLink: (
                <a
                  style={{ textDecoration: 'underline' }}
                  href='https://www.instagram.com/margaritaetbertrand030623/'
                  target='_blank'
                  rel='noreferrer'
                />
              ),
            }}
          />
        </p>
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
