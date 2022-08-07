import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import './index.css';
import { graphql } from 'gatsby';

export const Pages = {
  AccessHousing: 'Accès et logement',
  History: 'Notre histoire',
  Present: 'Cadeau',
  QA: 'FAQ',
  Schedule: 'Programme',
};

export default function PageTitle({ t, page }) {
  return (
    <div className='page-title'>
      {page === Pages.AccessHousing ? (
        <StaticImage
          src='https://images.unsplash.com/photo-1621983209352-c2880ac507b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt={page}
          className='page-title-image'
          quality={100}
        />
      ) : page === Pages.History ? (
        <StaticImage
          src='https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100'
          alt={page}
          className='page-title-image'
        />
      ) : page === Pages.Present ? (
        <StaticImage
          src='https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100'
          alt={page}
          className='page-title-image'
        />
      ) : page === Pages.QA ? (
        <StaticImage
          src='https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100'
          alt={page}
          className='page-title-image'
          quality={100}
        />
      ) : page === Pages.Schedule ? (
        <StaticImage src='../../images/programme.jpg' alt={page} className='page-title-image' />
      ) : null}
      <div className='page-title-overlay' />
      <h1>{t(page)}</h1>
    </div>
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
