/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './picture.scss';

const Picture = ({ picture, handleOpenCloseModal }) => (
  <img
    className="picture"
    src={picture.urls.small}
    alt="Your search result"
    id={picture.id}
    onClick={handleOpenCloseModal}
  />
);

export default Picture;
