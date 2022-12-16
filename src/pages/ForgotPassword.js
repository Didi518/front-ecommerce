import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';

const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Mot de passe oublié'} />
      <BreadCrumb title="Mot de passe oublié" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
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
                <CustomInput type="email" name="email" placeholder="E-mail" />
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
      </Container>
    </>
  );
};

export default ForgotPassword;
