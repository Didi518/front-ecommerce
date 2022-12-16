import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Inscription à la Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Votre Adresse E-mail"
                  aria-label="Votre Adresse E-mail"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  S'abonner
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contactez-Nous</h4>
              <div>
                <address className="text-white fs-6">
                  Digitic <br /> 21 Boulevard Gambetta, Alès <br /> Code Postal:
                  30100
                </address>
                <a
                  className="mt-3 d-block mb-1 text-white"
                  href="tel:+33 650246714"
                >
                  +33 650246714
                </a>
                <a
                  className="mt-2 d-block mb-0 text-white"
                  href="mailto:kevin.ouali@gmail.com"
                >
                  kevin.ouali@gmail.com
                </a>
                <div className="social_icons d-flex align-align-items-center gap-30 mt-4">
                  <Link className="text-white" to="">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsYoutube className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informations</h4>
              <div className="footer-links d-flex flex-column">
                <Link
                  to="/politique-confidentialite"
                  className="text-white py-2 mb-1"
                >
                  Politique de Confidentialité
                </Link>
                <Link
                  to="/politique-remboursement"
                  className="text-white py-2 mb-1"
                >
                  Politique de Remboursement
                </Link>
                <Link
                  to="/politique-livraison"
                  className="text-white py-2 mb-1"
                >
                  Politique de Livraison
                </Link>
                <Link
                  to="/conditions-generales"
                  className="text-white py-2 mb-1"
                >
                  Conditions Générales
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Compte</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Présentation</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link to="/contact" className="text-white py-2 mb-1">
                  Contacts
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Raccourcis</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">PC Portables</Link>
                <Link className="text-white py-2 mb-1">Caques</Link>
                <Link className="text-white py-2 mb-1">Tablettes</Link>
                <Link className="text-white py-2 mb-1">Montres</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Création de Kevin
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
