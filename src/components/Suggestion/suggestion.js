/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import './suggestion.scss';

const Suggestion = ({ suggestions, inputValue, handleSuggestOnClick, classNameContainer }) => (
  <div className={classNameContainer}>
    {suggestions.length >= 1 ? (
      <div>
        {inputValue.length >= 3 && (
          <ul className="list">
            {suggestions.map((suggest) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li className="list__item" key={suggest} onClick={() => handleSuggestOnClick()}>
                <div className="list__itemName">{suggest}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : (
      <p className="list__itemNoSuggestion">No suggestion, but type and see the result!</p>
    )}
  </div>
);

export default Suggestion;
