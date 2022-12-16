import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const SingleBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <Breadcrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Trouver Par Catégories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Montre</li>
                    <li>Tv</li>
                    <li>Photo</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Retours aux Blogs
                </Link>
                <h3 className="title">Un joli renouveau dimanche matin</h3>
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan urna libero, a gravida neque imperdiet sit
                  amet. Sed eleifend eleifend lorem at lacinia. Quisque non enim
                  eget ante vestibulum faucibus laoreet et neque. Cras in mauris
                  rutrum, hendrerit nisi sit amet, cursus augue. Pellentesque
                  iaculis nibh maximus, accumsan metus quis, scelerisque urna.
                  Phasellus dignissim placerat ipsum sit amet tincidunt. Nulla
                  facilisi. In hac habitasse platea dictumst. Vestibulum felis
                  dui, eleifend ut mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
