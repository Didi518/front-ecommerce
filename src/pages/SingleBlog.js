import React from 'react';
import Breadcrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const SingleBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <Breadcrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
