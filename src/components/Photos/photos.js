import React, { useState } from 'react';

import './photos.scss';
import Picture from './components/picture';
import Tag from './components/tag';
import Modal from '../Modal/modal';

const Photos = ({ result, searchResultTitle }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenCloseModal = (e) => setShowModal(e.target.id, !showModal);

  return (
    <>
      <header className="photos__header">
        <h2>{searchResultTitle}</h2>
      </header>
      {result.length >= 1 ? (
        <div className="photos__wrapper">
          {result.map((picture) => (
            <div className="photos" key={picture.id}>
              <Picture picture={picture} handleOpenCloseModal={handleOpenCloseModal} />
              <div>
                {picture.tags.map((tag) => (
                  <Tag tag={tag} />
                ))}
              </div>
              {showModal === picture.id && (
                <Modal picture={picture} handleOpenCloseModal={handleOpenCloseModal} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="photos__noResults">
          <h3>
            Sorry we don&lsquo;t have a picture with that name. Try again with a different name.
          </h3>
        </div>
      )}
    </>
  );
};

export default Photos;
