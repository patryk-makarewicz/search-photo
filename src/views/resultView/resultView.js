import React from 'react';

const ResultView = ({
  result,
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
}) => (
  <div>
    <h1>Results</h1>
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
    <div>
      {result.map((picture) => (
        <img key={picture.id} src={picture.urls.small} alt="Your search result" />
      ))}
    </div>
  </div>
);

export default ResultView;
