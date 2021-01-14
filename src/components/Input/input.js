import React from 'react';

const Input = ({ handleInputChange, handleInputSubmit, inputValue, handleInputDelete }) => (
  <div>
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

export default Input;
