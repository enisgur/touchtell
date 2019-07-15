import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductsListing from './comp/ProductsListing';
import Search from './comp/Search';
import CategoriesNav from './comp/CategoriesNav';

const Landing = ({ isAuthenticated }) => {
  // if user loged in redirect to /dashboard
  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <div className="body">
      <div className="contentHead">
        <div className="headerBody">
          <div className="bodybody">
            <h1>Touch Tel Wireless</h1>
            <h3>Your local phone, tablet repair and accessories place.</h3>
            <Link className="button" to="#fix">
              Broken Device ?
            </Link>
          </div>
        </div>
      </div>

      <CategoriesNav />

      <div className="body-body">
        <Search />
        {/* <div className="search">
          <input type="text" placeholder="&#128270; Search.." />
        </div> */}

        <ProductsListing />
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
