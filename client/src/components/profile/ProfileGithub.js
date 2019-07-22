import React from "react";
import PropTypes from "prop-types";

const ProfileGithub = props => {
  return (
    <div className='repo bg-white p-1 my-1'>
      <div>
        <h4>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            Repo One
          </a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          laborum!
        </p>
      </div>
      <div>
        <ul>
          <li className='badge badge-primary'>Stars: 44</li>
          <li className='badge badge-dark'>Watchers: 21</li>
          <li className='badge badge-light'>Forks: 25</li>
        </ul>
      </div>
    </div>
  );
};

ProfileGithub.propTypes = {};

export default ProfileGithub;
