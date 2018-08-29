import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <div className="post">
    <PostHeader
      picture={data.picture}
      fullname={data.fullname}
      since={data.since}
    />
    <p>{data.content}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    picture: PropTypes.string,
    fullname: PropTypes.string,
    since: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
