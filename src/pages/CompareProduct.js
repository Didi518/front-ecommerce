import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Container from '../components/Container';
import Meta from '../components/Meta';

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Comparaison d'Articles"} />
      <BreadCrumb title="Comparaison d'Articles" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="/images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="croix"
              />
              <div className="product-card-image">
                <img src="/images/watch.jpg" alt="montre" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Tablette Honor T1 7.0 1 GB ROM 7 POUCES Avec Wi-Fi+3G
                </h5>
                <h6 className="price mb-3 mt-3">100€</h6>
                <div>
                  <div className="product-detail">
                    <h5>Marque:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Montre</p>
                  </div>
                  <div className="product-detail">
                    <h5>Disponibilité:</h5>
                    <p>En Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Couleurs:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Taille:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="/images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="croix"
              />
              <div className="product-card-image">
                <img src="/images/watch.jpg" alt="montre" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Tablette Honor T1 7.0 1 GB ROM 7 POUCES Avec Wi-Fi+3G
                </h5>
                <h6 className="price mb-3 mt-3">100€</h6>
                <div>
                  <div className="product-detail">
                    <h5>Marque:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Montre</p>
                  </div>
                  <div className="product-detail">
                    <h5>Disponibilité:</h5>
                    <p>En Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Couleurs:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Taille:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
