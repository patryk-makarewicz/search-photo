import React from 'react';

const StartView = ({
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
  suggestions,
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
    {inputValue.length === 3 && (
      <div>
        {suggestions.map((item) => (
          <p item={item}> {item} </p>
        ))}
      </div>
    )}
  </div>
);

export default StartView;
