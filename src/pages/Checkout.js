import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Digitic</h3>
                <nav
                  style={{ '--bs-breadcrumb-divider': '>' }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/panier" className="text-dark">
                        Panier
                      </Link>
                    </li>
                    &nbsp; / &nbsp;
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active">
                      Livraison
                    </li>
                    &nbsp; /
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Payement
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Informations Client</h4>
                <p className="user-details total">
                  Kevin Ouali (kevin.ouali@gmail.com)
                </p>
                <h4 className="mb-3">Adresse de Livraison</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Pays
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Prénom"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Nom"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Adresse"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Complément (Appartement, Suite, etc)"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Code Postal"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Ville"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Province (si nécessaire)
                      </option>
                    </select>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/panier" className="text-dark">
                        <BiArrowBack className="me-2" /> Retour au Panier
                      </Link>
                      <Link to="/boutique" className="button">
                        Continer les Achats
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10" position-absolute>
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: '-10px', right: '2px' }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img
                        className="img-fluid"
                        src="/images/watch.jpg"
                        alt="article"
                      />
                    </div>
                    <div>
                      <h5 className="total-price">Lorem ipsum</h5>
                      <p className="total-price">Lorem ipsum bla bla</p>
                    </div>
                  </div>
                  <div className="flew-grow-1">
                    <h5 className="total">100€</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Sous-Total</p>
                  <p className="total-price">100€</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Livraison</p>
                  <p className="mb-0 total-price">100€</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">100€</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
