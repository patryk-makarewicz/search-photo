/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import styles from './suggestion.module.scss';

const Suggestion = ({ suggestions, inputValue, handleSuggestOnClick }) => (
  <div className={styles.wrapper}>
    {suggestions.length >= 1 ? (
      <div>
        {inputValue.length >= 3 && (
          <ul className={styles.list}>
            {suggestions.map((suggest) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li className={styles.listItem} key={suggest} onClick={() => handleSuggestOnClick()}>
                <div className={styles.listItemName}>{suggest}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : (
      <p className={styles.listItemNoSuggestion}>No suggestion, but type and see the result!</p>
    )}
  </div>
);

export default Suggestion;
