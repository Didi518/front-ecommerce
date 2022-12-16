import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';

const Login = () => {
  return (
    <>
      <Meta title={'Connexion'} />
      <BreadCrumb title="Connexion" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Connexion</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="E-mail" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                />
                <div>
                  <Link to="/changer-mdp">Mot de passe oublié?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Connexion
                    </button>
                    <Link to="/inscription" className="button signup">
                      Inscription
                    </Link>
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

export default Login;
