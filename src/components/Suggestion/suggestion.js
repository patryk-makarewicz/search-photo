/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const Suggestion = ({ suggestions, inputValue, handleSuggestOnClick }) => {
  return (
    <div>
      {suggestions.length >= 1 ? (
        <div>
          {inputValue.length >= 3 && (
            <ul>
              {suggestions.map((suggest) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <li key={suggest} onClick={() => handleSuggestOnClick()}>
                  {suggest}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <p>No suggestion, but type and see the result!</p>
      )}
    </div>
  );
};

export default Suggestion;
