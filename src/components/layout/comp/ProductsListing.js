import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

import { getAllProducts } from '../../../actions/products';

const ProductsListing = ({ getAllProducts, products }) => {
  useEffect(() => {
    getAllProducts();
  }, []);

  // console.log(products);

  return products.loading && products.products === null ? (
    <Spinner />
  ) : !products.loading && products.products === null ? (
    <div>No Product found</div>
  ) : (
    <Fragment>
      <div className="items">
        {products.products.map(pro => {
          return (
            <div key={pro._id} className="item">
              <div className="itemPic">
                <img src={pro.image} alt="itemPic" />
              </div>
              <div className="itemDetails">
                <h3>{pro.brand}</h3>
                <h6>{pro.product}</h6>
                <p>{pro.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

ProductsListing.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.object
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { getAllProducts }
)(ProductsListing);
