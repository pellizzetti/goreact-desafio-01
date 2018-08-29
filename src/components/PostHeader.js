import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ picture, fullname, since }) => (
  <div>
    <img alt="Foto do perfil do usuário" src={picture} />
    <div>
      <p>{fullname}</p>
      <p>{`há ${since}`}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  picture: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  since: PropTypes.string.isRequired,
};

export default PostHeader;
