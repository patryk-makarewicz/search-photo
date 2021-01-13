import React, { useState } from 'react';
import axios from 'axios';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState([]);
  const clientID = '';

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${clientID}`;
    if (e.keyCode === 13) {
      axios.get(url).then((response) => setResult(response.data.results));
    }
  };

  const handleInputDelete = () => {
    setInputValue('');
  };

  return (
    <>
      <GlobalStyle />
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
        {result.map((picture) => (
          <img key={picture.id} src={picture.urls.small} alt="Your search result" />
        ))}
      </div>
    </>
  );
};

export default Root;
