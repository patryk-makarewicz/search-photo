import React from 'react';

const StartView = ({ handleInputChange, handleInputSubmit, inputValue, handleInputDelete }) => (
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
  </div>
);

export default StartView;
