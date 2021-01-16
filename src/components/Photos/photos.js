/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import './photos.scss';

const Photos = ({ result, searchResultTitle }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenCloseModal = () => setShowModal(!showModal);
  return (
    <>
      <header className="photos__header">
        <h2>{searchResultTitle}</h2>
      </header>
      <div className="photos__wrapper">
        {result.map((picture) => (
          <div className="photos" key={picture.id} onClick={handleOpenCloseModal}>
            <img className="photos__photo" src={picture.urls.small} alt="Your search result" />
            <div>
              {picture.tags.map((tag) => (
                <span className="photos__tag" key={tag.title}>
                  {tag.title}
                </span>
              ))}
            </div>
            {showModal === true && (
              <div className="photos__modalOpen">
                <button type="submit" onClick={handleOpenCloseModal}>
                  X
                </button>
                <div>
                  <img src={picture.user.profile_image.small} alt="Author" />
                  <p>{picture.user.name}</p>
                </div>
                <img src={picture.urls.thumb} alt="Your search result" />
                <p>{picture.alt_description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Photos;
