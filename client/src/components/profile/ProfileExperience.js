import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, from, to, current, description }
}) => {
  return (
    <div>
      <h3 className='text-dark'>{company}</h3>
      {from && (
        <p>
          <Moment format='YYYY-MM-DD'>{from}</Moment>}-
          {current ? "Current" : <Moment format='YYYY=MM-DD'>{to}</Moment>}
        </p>
      )}

      <p>
        <strong>Position: </strong>
        {title}
      </p>
      {description && (
        <p>
          <strong>Description: </strong>
          description
        </p>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {};

export default ProfileExperience;
