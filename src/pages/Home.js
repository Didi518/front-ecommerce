import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="bannière principale"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Autonomie Pro</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>999€ ou 41.62€/mois</p>
                  <Link className="button">Acheter</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="bannière principale"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Meilleure Vente</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      1699 <br />
                      ou 64.62€/mois
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="bannière principale"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Nouveautés</h4>
                    <h5>iPad Air</h5>
                    <p>
                      599€ <br />
                      ou 49.91€/mois
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="bannière principale"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>-15%</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Nouvelles Couleurs <br />
                      Nouveaux Designs
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="bannière principale"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>A Saisir</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      Grande qualité de lecture <br />
                      Distortion ultra-faible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
