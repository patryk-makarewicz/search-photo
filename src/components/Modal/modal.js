import React from 'react';

import './modal.scss';

const Modal = ({ picture, handleOpenCloseModal }) => (
  <div className="modal__open">
    <div className="modal__wrapper">
      <div className="modal__info">
        <div className="modal__author">
          <img className="modal__author-img" src={picture.user.profile_image.small} alt="Author" />
          <span>{picture.user.name}</span>
        </div>
        <button className="modal__button" type="button" onClick={handleOpenCloseModal}>
          X
        </button>
      </div>
      <div className="modal__picture">
        <img className="modal__picture-img" src={picture.urls.regular} alt="Your search result" />
      </div>
      <div className="modal__info">
        <p>{picture.alt_description}</p>
      </div>
    </div>
  </div>
);

export default Modal;
