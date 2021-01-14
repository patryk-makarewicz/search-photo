import React from 'react';

import Suggestion from '../../components/Suggestion/suggestion';

const StartView = ({
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
  suggestions,
  handleSuggestOnClick,
}) => (
  <div>
    <h1>Search photo</h1>
    <input
      type="text"
      name="photo"
      placeholder="Search photo"
      onChange={handleInputChange}
      onKeyDown={(e) => handleInputSubmit(e)}
      value={inputValue}
    />
    <button type="button" onClick={handleInputDelete}>
      X
    </button>
    <Suggestion
      suggestions={suggestions}
      inputValue={inputValue}
      handleSuggestOnClick={handleSuggestOnClick}
    />
  </div>
);

export default StartView;
