import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const OurStore = () => {
  return (
    <>
      <Meta title={'Boutique'} />
      <BreadCrumb title="Boutique" />
      <div className="store-wrapper"></div>
    </>
  );
};

export default OurStore;
