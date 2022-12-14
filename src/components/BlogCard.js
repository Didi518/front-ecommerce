import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="/images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">14 Dec, 2022</p>
        <h5 className="title">Un joli renouveau dimanche matin</h5>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit eros dignissim,
          vivamus habitasse!
        </p>
        <Link to="/blog/:id" className="button">
          Détails
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
