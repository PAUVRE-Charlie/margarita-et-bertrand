import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useTranslation } from 'react-i18next';
import './styles.css';
import { StaticImage } from 'gatsby-plugin-image';

const Layout = ({ title, description, image, hideHeader = false, children }) => {
  const { pathname } = useLocation();
  const { languages, language, changeLanguage } = useI18next();
  const { t } = useTranslation();
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription, defaultImage, siteUrl } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  const isBrowser = () => typeof window !== 'undefined';

  return (
    <div id='app'>
      <Helmet
        title={seo.title}
        htmlAttributes={{
          lang: language,
        }}
      >
        <meta name='description' content={seo.description} />
        <meta name='image' content={seo.image} />
        {seo.url && <meta property='og:url' content={seo.url} />}
        {seo.title && <meta property='og:title' content={seo.title} />}
        {seo.description && <meta property='og:description' content={seo.description} />}
        {seo.image && <meta property='og:image' content={seo.image} />}
        <meta name='twitter:card' content='summary_large_image' />
        {seo.title && <meta name='twitter:title' content={seo.title} />}
        {seo.description && <meta name='twitter:description' content={seo.description} />}
        {seo.image && <meta name='twitter:image' content={seo.image} />}
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Poppins:ital,wght@0,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <header>
        <div />
        {/* <StaticImage src='../images/logo.svg' className='logo' height={65} quality={100} placeholder='blurred' alt='logo' /> */}

        <div>
          <div>
            <img src='/icons/world.svg' className='select-icon' alt='language icon' />
            <select name='language' value={language} onChange={e => changeLanguage(e.target.value)} className='bold'>
              {languages.map(l => (
                <option key={l} value={l}>
                  {l.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      <div id='content'>
        {!hideHeader && (
          <nav>
            <Link to='/' className={`${isBrowser() && window?.location.pathname === '/' ? 'bold' : ''}`}>
              Accueil
            </Link>
            <Link to='/history' className={`${isBrowser() && window?.location.pathname === '/history' ? 'bold' : ''}`}>
              Notre histoire
            </Link>
            <a href='https://www.google.com' target='_blank' rel='noreferrer'>
              Je confirme ma présence
            </a>
            <Link to='/access&housing' className={`${isBrowser() && window?.location.pathname === '/access&housing' ? 'bold' : ''}`}>
              Accès & logement
            </Link>
            <Link to='/schedule' className={`${isBrowser() && window?.location.pathname === '/schedule' ? 'bold' : ''}`}>
              Programme
            </Link>
            <Link to='/q&a' className={`${isBrowser() && window?.location.pathname === '/q&a' ? 'bold' : ''}`}>
              FAQ
            </Link>
            <Link to='/present' className={`${isBrowser() && window?.location.pathname === '/present' ? 'bold' : ''}`}>
              Cadeaux
            </Link>
          </nav>
        )}
        {children}
      </div>
      <footer>
        <div className='footer-head with-margins'>
          {/* <small>{t('Pr^?')}</small>
          <h2>{t('Fait partie des premiers !')}</h2>
          <a href='https://form.jotform.com/221335802939054' target='_blank' rel='noreferrer'>
            <button>{t('Je rejoins la bêta !')}</button>
          </a> */}
        </div>
        <div className='footer-bottom with-margins'>
          <a href='mailto:chpauvre@gmail.com' target='_blank' rel='noreferrer'>
            <small>{t('Contactez-nous')}</small>
          </a>
          <small>Copyright © 2022. Mangakan. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
Layout.defaultProps = {
  title: null,
  description: null,
  image: null,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
