/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import './photos.scss';
import Modal from '../Modal/modal';

const Photos = ({ result, searchResultTitle }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenCloseModal = (e) => setShowModal(e.target.id, !showModal);

  return (
    <>
      <header className="photos__header">
        <h2>{searchResultTitle}</h2>
      </header>
      <div className="photos__wrapper">
        {result.map((picture) => (
          <div className="photos" key={picture.id}>
            <img
              className="photos__picture"
              src={picture.urls.small}
              alt="Your search result"
              id={picture.id}
              onClick={handleOpenCloseModal}
            />
            <div>
              {picture.tags.map((tag) => (
                <span className="photos__tag" key={tag.title}>
                  {tag.title}
                </span>
              ))}
            </div>
            {showModal === picture.id && (
              <Modal picture={picture} handleOpenCloseModal={handleOpenCloseModal} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Photos;
