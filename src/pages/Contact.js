import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiInfoCircle, BiPhoneCall } from 'react-icons/bi';

const Contact = () => {
  return (
    <>
      <Meta title={'Contactez-nous'} />
      <BreadCrumb title="Contactez-nous" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="contactez-nous"
                src="https:/www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.907945060295!2d3.882584815568433!3d43.60845827912283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6afa047b78a77%3A0x2a496e9a99a5d4a5!2sPolygone%20Montpellier!5e0!3m2!1sfr!2sfr!4v1671102775859!5m2!1sfr!2sfr"
                width="600"
                height="450"
                className="b-0 w-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contactez-nous</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nom"
                      ></input>
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail*"
                      ></input>
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Téléphone Portable"
                      ></input>
                    </div>
                    <div>
                      <textarea
                        name=""
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Commentaires"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Envoi</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Dîtes-nous tout</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Digitic 21 Boulevard Gambetta, 30100 Alès
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+33650246714">+33 650246714</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:kevin.ouali@gmail.com">
                          kevin.ouali@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Lundi - Vendredi 10am - 8pm</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
