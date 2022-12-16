import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Home = () => {
  return (
    <>
      <Meta title={'Accueil'} />
      <BreadCrumb title="Accueil" />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="/images/main-banner-1.jpg"
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
                    src="/images/catbanner-01.jpg"
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
                    src="/images/catbanner-03.jpg"
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
                    src="/images/catbanner-02.jpg"
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
                    src="/images/catbanner-04.jpg"
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
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6>Livraisons Offertes</h6>
                    <p className="mb-0">Pour toute commande de 100€ et plus</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6>Offres Surprises Quotidiennes</h6>
                    <p className="mb-0">Economisez jusqu'à 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6>Assistance 24/7</h6>
                    <p className="mb-0">Consultez nos experts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6>Meilleurs Tarifs</h6>
                    <p className="mb-0">Prix d'usine</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6>Paiements Sécurisés</h6>
                    <p className="mb-0">règlements 100% sécurisés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music&Gaming</h6>
                    <p>10 articles</p>
                  </div>
                  <img src="/images/camera.jpg" alt="photographie" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Photo</h6>
                    <p>10 articles</p>
                  </div>
                  <img src="/images/camera.jpg" alt="photographie" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 articles</p>
                  </div>
                  <img src="/images/tv.jpg" alt="photographie" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Montres</h6>
                    <p>10 articles</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="photographie" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music&Gaming</h6>
                    <p>10 articles</p>
                  </div>
                  <img src="/images/camera.jpg" alt="photographie" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Photo</h6>
                    <p>10 articles</p>
                  </div>
                  <img src="/images/camera.jpg" alt="photographie" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 articles</p>
                  </div>
                  <img src="/images/tv.jpg" alt="photographie" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Montres</h6>
                    <p>10 articles</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="photographie" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Coup de projecteur</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative bg-dark">
                <img
                  src="/images/famous-1.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Grand Ecran</h5>
                  <h6>Montres Connectées</h6>
                  <p>Dés 399€ ou 16.62€/mois sur 24 mois</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="/images/famous-2.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Ecran Studio</h5>
                  <h6 className="text-dark">Luminosité de 600 nits</h6>
                  <p className="text-dark">27 pouces 5k Ecran Retina</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="/images/famous-3.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphones</h5>
                  <h6 className="text-dark">Smartphone 13 Pro</h6>
                  <p className="text-dark">
                    Disponible en vert. Dés 999€ ou 41.62€/mois sur 24 mois.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="/images/famous-4.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Enceintes</h5>
                  <h6 className="text-dark">Un son qui remplit la maison</h6>
                  <p className="text-dark">
                    Dés 699€ ou 118.58€/mois sur 12 mois.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Offres Spéciales</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Meilleures Ventes</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="/images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Nos derniers Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
