/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import styles from './resultView.module.scss';
import Input from '../../components/Input/input';
import Suggestion from '../../components/Suggestion/suggestion';

const ResultView = ({
  result,
  suggestions,
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
  searchResultTitle,
  handleSuggestOnClick,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenCloseModal = () => setShowModal(!showModal);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input
          classNameInput="input input--result"
          classNameButton="input__button input__button--result"
          classNameContainer="input__container input__container--result "
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          inputValue={inputValue}
          handleInputDelete={handleInputDelete}
        />
        <Suggestion
          classNameContainer="list__container list__container--result"
          suggestions={suggestions}
          inputValue={inputValue}
          handleSuggestOnClick={handleSuggestOnClick}
        />
        <div>
          <h2>{searchResultTitle}</h2>
        </div>
        <div>
          {result.map((picture) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div key={picture.id} onClick={handleOpenCloseModal}>
              <img src={picture.urls.small} alt="Your search result" />
              <div>
                {picture.tags.map((tag) => (
                  <p key={tag.title}> {tag.title}</p>
                ))}
              </div>
              {showModal === true && (
                <div className={styles.modalOpen}>
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
      </div>
    </div>
  );
};

export default ResultView;
