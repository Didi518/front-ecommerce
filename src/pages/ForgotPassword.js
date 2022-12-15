import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Mot de passe oublié'} />
      <BreadCrumb title="Mot de passe oublié" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">
                  Réinitialiser le Mot de Passe
                </h3>
                <p className="text-center mt-2 mb-3">
                  Nous vous enverrons un mail pour changer le mot de passe
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button type="submit" className="button border-0">
                        Valider
                      </button>
                      <Link to="/connexion">Annuler</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
