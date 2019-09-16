import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Landing from './components/layout/Landing';
// import Brand from './Brand';
// import Model from './Model';

import { deleteSelectedIssue } from '../../actions/fix';

const Booking = ({ fix, deleteSelectedIssue }) => {
  let onClick = e => {
    // const { name } = e.target;
    const { id } = e.target;
    console.log(id);
    // getSelectedBrand(id);
  };

  let onGoBack = e => {
    // const { name } = e.target;
    const { id } = e.target;
    // console.log(id);
    deleteSelectedIssue();
  };
  return (
    <Fragment>
      <div className="fix-layout">
        <div className="fix-title">Booking</div>
        <div className="fix-title-detail">Select "day" and "time"</div>
        <div className="fix-items lay-tree"></div>
        <div className="buttons">
          <button onClick={e => onGoBack(e)} className="back">
            Go Back
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Booking.propTypes = {
  deleteSelectedIssue: PropTypes.func.isRequired,
  fix: PropTypes.object
};

const mapStateToProp = state => ({
  fix: state.fix
});

export default connect(
  mapStateToProp,
  { deleteSelectedIssue }
)(Booking);
