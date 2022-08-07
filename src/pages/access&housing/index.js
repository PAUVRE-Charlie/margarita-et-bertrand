import React from 'react';
import Layout from '../../layouts';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import './index.css';
import PageTitle, { Pages } from '../../components/pageTitle';
import useIsVIP from '../../components/vipProvider';
import { StaticImage } from 'gatsby-plugin-image';

export default function AccessHousing() {
  const { t } = useTranslation('accesshousing');

  return (
    <Layout>
      <PageTitle t={t} page={Pages.AccessHousing} />
      <div className='localisation with-margins'>
        <h4>{t('Localisation')}</h4>
        <p>{t("Le mariage aura lieu au Château le Chereau, au sud d'Orléans, à 2 H de Paris et 25 minutes de Blois")}</p>
      </div>
      <div className='access with-margins'>
        <h4>{t('Accès')}</h4>
        <div className='access-cards'>
          <a
            className='access-card border-primary'
            target='_blank'
            rel='noreferrer'
            href='https://www.google.com/maps/dir//Ch%C3%A2teau+du+Ch%C3%A9reau,+41210+Montrieux-en-Sologne/@47.5414297,1.6484143,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x47e4c91100a57937:0xcccf6c191e33390e!2m2!1d1.718454!2d47.541451!3e4'
          >
            <StaticImage
              alt='plane'
              src='https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
              className='access-card-image'
            />
            <div className='access-card-content'>
              <h4>{t('Avion')}</h4>
              <small>{t("Les aéroports les plus proches sont les aéroports de Paris et l'aéroport de Tours-Val de Loire")}</small>
            </div>
          </a>
          <a
            className='access-card border-secondary'
            target='_blank'
            rel='noreferrer'
            href='https://www.google.com/maps/dir//Ch%C3%A2teau+du+Ch%C3%A9reau,+41210+Montrieux-en-Sologne/@47.5414297,1.6484142,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47e4c91100a57937:0xcccf6c191e33390e!2m2!1d1.718454!2d47.541451!3e0'
          >
            <StaticImage
              alt='car'
              src='https://images.unsplash.com/photo-1511312817910-ffa2ca5d954e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
              className='access-card-image'
            />
            <div className='access-card-content'>
              <h4>{t('Voiture')}</h4>
              <small>
                {t("Le Château le Chereau se trouve à 2 heures de Paris, 50 minutes d'Orléans et à 30 minutes de Blois en voiture.")}
              </small>
            </div>
          </a>
        </div>
        <img className='access-flower' src='/flowers/flower1.svg' alt='flower' />
      </div>
      <div className='housing with-margins'>
        <h4>{t('Logement')}</h4>
        <small style={{ fontStyle: 'italic', color: 'grey', marginTop: '10px', display: 'block' }}>
          {t("Nous proposons certains logements, mais vous pouvez trouver d'autres choix proches du Château le Chereau")}
        </small>
        <h5>{t('Hôtels')}</h5>
        <div className='housing-cards'>
          <a className='housing-card border-tertiary' href='https://www.chateaudelagiraudiere.fr' target='_blank' rel='noreferrer'>
            <StaticImage
              alt='Château de la Giraudière'
              src='https://cnstlltn.com/crop-1200x900/aaaf9b63-b68d-4013-9a8d-785647b09f24/ch%c3%a2teau+fa%c3%a7ade.jpg'
              className='housing-card-image'
            />
            <div className='housing-card-content'>
              <h4>{t('Château de la Giraudière')}</h4>
              <small>{t('8 km - 12 minutes')}</small>
            </div>
          </a>
          <a className='housing-card border-quaternary' href='https://www.laborde-sologne.fr' target='_blank' rel='noreferrer'>
            <StaticImage
              alt='laborde-sologne'
              src='https://www.laborde-sologne.fr/_novaimg/4866734-1474482_0_0_1527_584_2000_764.jpg'
              className='housing-card-image'
            />
            <div className='housing-card-content'>
              <h4>{t('La Borde en Sologne')}</h4>
              <small>{t('9 km - 10 minutes')}</small>
            </div>
          </a>
        </div>
        <h5>{t("Gîtes et Chambres d'hôtes")}</h5>
        <div className='housing-cards'>
          {/* <a className='housing-card border-primary' href='https://harasdegarrypierre.fr' target='_blank' rel='noreferrer'>
            <StaticImage
              alt='Haras de Garrypierre'
              src='https://harasdegarrypierre.fr/wp-content/uploads/2021/11/Gite-du-haras-de-garrypierre-Ferme-du-Garry-88.jpg'
              className='housing-card-image'
            />
            <div className='housing-card-content'>
              <h4>{t('Haras de Garrypierre')}</h4>
              <small>{t('11km - 14 minutes')}</small>
            </div>
          </a> */}
          <a
            className='housing-card border-secondary'
            href='https://la-gauchere-montrieux-en-sologne.hotelmix.fr/?_ga=2.46033639.238013354.1658854412-202248.1658854412'
            target='_blank'
            rel='noreferrer'
          >
            <StaticImage
              alt='La Gauchere'
              src='https://p.bookcdn.com/data/Photos/r1536x518/8123/812303/812303900/La-Gauchere-photos-Exterior-La-Gauch-re.JPEG'
              className='housing-card-image'
            />
            <div className='housing-card-content'>
              <h4>{t('La Gauchere')}</h4>
              <small>{t('2,8 km - 6 minutes')}</small>
            </div>
          </a>
          <a className='housing-card border-tertiary' href='https://www.lamaisondetelaime.com' target='_blank' rel='noreferrer'>
            <StaticImage
              alt="La maison de Tel'Aime"
              src='https://static.wixstatic.com/media/0dda93_1708d9689c6143a8bf7eedd7e2ad58ab~mv2.jpg/v1/fill/w_831,h_725,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/0dda93_1708d9689c6143a8bf7eedd7e2ad58ab~mv2.jpg'
              className='housing-card-image'
            />
            <div className='housing-card-content'>
              <h4>{t("La maison de Tel'Aime")}</h4>
              <small>{t('2,3 km - 4 minutes')}</small>
            </div>
          </a>
          <a
            className='housing-card border-quaternary'
            href='https://montrieuxensologne.fr/le-gite-communal/'
            target='_blank'
            rel='noreferrer'
          >
            <StaticImage
              alt='Le gîte communal de Montrieux-en-Sologne'
              src='https://montrieuxensologne.fr/wp-content/uploads/2015/06/exterieur_gite2.jpg'
              className='housing-card-image'
            />
            <div className='housing-card-content'>
              <h4>{t('Gîte communal')}</h4>
              <small>{t('2,3 km - 4 minutes')}</small>
            </div>
          </a>
          <a className='housing-card border-primary' href='https://www.chambreslestilleuls.fr' target='_blank' rel='noreferrer'>
            <StaticImage
              alt='Les Tilleuls'
              src='https://www.chambreslestilleuls.fr/photo/pagecontent/4/2_about.jpg'
              className='housing-card-image'
            />
            <div className='housing-card-content'>
              <h4>{t('Les Tilleuls')}</h4>
              <small>{t('7,7 km - 10 minutes')}</small>
            </div>
          </a>
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
