import React from 'react';
import Layout from '../../layouts';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import './index.css';
import PageTitle, { Pages } from '../../components/pageTitle';

export default function Present() {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageTitle t={t} page={Pages.Present} />
      <div className='present with-margins'>
        <h4>{t("Notre plus beau cadeau de mariage, ce sera à n'en pas douter votre présence.")}</h4>
        <p>{t('Cependant, le jour du mariage, une urne sera à disposition des invités souhaitant contribuer à notre voyage de noces.')}</p>
        <img className='present-flower' src='/flowers/flower2.svg' alt='flower' />
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
