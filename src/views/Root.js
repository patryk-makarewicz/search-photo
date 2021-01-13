import React, { useState } from 'react';
import axios from 'axios';
import GlobalStyle from 'theme/GlobalStyle';

import StartView from './startView/startView';
import ResultView from './resultView/resultView';

const Root = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(false);
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
      {!result ? (
        <StartView
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          inputValue={inputValue}
          handleInputDelete={handleInputDelete}
        />
      ) : (
        <ResultView
          result={result}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          inputValue={inputValue}
          handleInputDelete={handleInputDelete}
        />
      )}
    </>
  );
};

export default Root;
