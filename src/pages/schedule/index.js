import React from 'react';
import Layout from '../../layouts';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import './index.css';

export default function Home() {
  const { t } = useTranslation();

  return <Layout>{t('Hello')}</Layout>;
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
