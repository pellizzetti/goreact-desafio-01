import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ picture, fullname, since }) => (
  <Fragment>
    <img alt="Foto do perfil do usuário" src={picture} />
    <div>
      <p className="fullName">{fullname}</p>
      <p className="since">{`há ${since}`}</p>
    </div>
  </Fragment>
);

PostHeader.propTypes = {
  picture: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  since: PropTypes.string.isRequired,
};

export default PostHeader;
