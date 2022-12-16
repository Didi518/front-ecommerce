import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
      <Meta title={'Liste de favoris'} />
      <BreadCrumb title="Liste de favoris" />
      <div className="wishilist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="/images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="croix"
                />
                <div className="wishlist-card-image">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Tablette Honor T1 7.0 1 GB ROM 7 POUCES Avec Wi-Fi+3G
                  </h5>
                  <h6 className="price">100€</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="/images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="croix"
                />
                <div className="wishlist-card-image">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Tablette Honor T1 7.0 1 GB ROM 7 POUCES Avec Wi-Fi+3G
                  </h5>
                  <h6 className="price">100€</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="/images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="croix"
                />
                <div className="wishlist-card-image">
                  <img
                    src="/images/watch.jpg"
                    className="img-fluid w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Tablette Honor T1 7.0 1 GB ROM 7 POUCES Avec Wi-Fi+3G
                  </h5>
                  <h6 className="price">100€</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
