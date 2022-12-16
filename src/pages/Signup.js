import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';

const Signup = () => {
  return (
    <>
      <Meta title={'Inscription'} />
      <BreadCrumb title="Inscription" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Inscription</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="Prénom"
                />
                <CustomInput type="text" name="lastname" placeholder="Nom" />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Téléphone portbale"
                />
                <CustomInput type="email" name="email" placeholder="E-mail" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                />
                <CustomInput
                  type="password"
                  name="conformPassword"
                  placeholder="Répétez le mot de passe"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Inscription</button>
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

export default Signup;
