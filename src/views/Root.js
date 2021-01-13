import React, { useState } from 'react';
import axios from 'axios';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => {
  const [photo, setPhoto] = useState('');
  const [result, setResult] = useState([]);
  const { clientID } = '';

  const handleChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleSubmit = () => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=${clientID}`;
    axios.get(url).then((response) => setResult(response.data.results));
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Search photo</h1>
        <input type="text" name="photo" placeholder="Search photo" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
        {result.map((picture) => (
          <img key={picture.id} src={picture.urls.small} alt="Your search result" />
        ))}
      </div>
    </>
  );
};

export default Root;
