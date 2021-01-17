import React from 'react';

import './tag.scss';

const Tag = ({ tag }) => (
  <span className="tag" key={tag.title}>
    {tag.title}
  </span>
);

export default Tag;
