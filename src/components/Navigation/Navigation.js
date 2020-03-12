import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <div className="container">
      <div className="navbar flex">
        <div className="item">
          <Link
            to="/"
            className="link"
          >
            <div className="link-item flex ai-center jc-center">
              Home
            </div>
          </Link>
        </div>
        <div className="item">
          <Link
            to="/posts"
            className="link"
          >
            <div className="link-item flex ai-center jc-center">
              Posts
            </div>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Navigation;
