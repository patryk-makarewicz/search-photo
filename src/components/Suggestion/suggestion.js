import React from 'react';

const Suggestion = ({ suggestions, inputValue }) => (
  <div>
    {suggestions.length >= 1 ? (
      <div>
        {inputValue.length >= 3 && (
          <div>
            {suggestions.map((suggest) => (
              <p key={suggest}> {suggest} </p>
            ))}
          </div>
        )}
      </div>
    ) : (
      <p>No suggestion, but type and see the result!</p>
    )}
  </div>
);

export default Suggestion;
