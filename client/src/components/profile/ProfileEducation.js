import React from "react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, current, description }
}) => {
  return (
    <div>
      <h3>{school}</h3>
      {from && (
        <p>
          <Moment format='YYYy-MM-DD'>{from}</Moment>-
          {current ? "Current" : <Moment format='YYYY-MM-DD'>{to}</Moment>}
        </p>
      )}
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      {fieldofstudy && (
        <p>
          <strong>Field Of Study: </strong>
          {fieldofstudy}
        </p>
      )}
      {description && (
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {};

export default ProfileEducation;
