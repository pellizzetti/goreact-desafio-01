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

Post.defaultProps = {
  data: {
    id: 9999,
    picture: 'https://i.imgur.com/zPOb8h9.jpg',
    fullname: 'Varsos Bong',
    since: '5 anos',
    content: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.',
  },
};

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    picture: PropTypes.string,
    fullname: PropTypes.string,
    since: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Post;
