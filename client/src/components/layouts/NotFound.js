import React, { Fragment } from "react";
import PropTypes from "prop-types";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' />Page Not Found
      </h1>
      <p className='larg'>Sorry, This page does not exists</p>
    </Fragment>
  );
};

NotFound.propTypes = {};

export default NotFound;
