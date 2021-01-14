import React, { useState } from 'react';
import axios from 'axios';
import GlobalStyle from 'theme/GlobalStyle';
import { data } from '../Data/data';

import StartView from './startView/startView';
import ResultView from './resultView/resultView';

const Root = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(data);
  const [result, setResult] = useState(false);
  const clientID = '';

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    setSuggestions(
      suggestions.filter((suggest) =>
        suggest.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()),
      ),
    );

    if (!e.target.value.length) {
      setSuggestions(data);
    }
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
          inputValue={inputValue}
          suggestions={suggestions}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          handleInputDelete={handleInputDelete}
        />
      ) : (
        <ResultView
          inputValue={inputValue}
          suggestions={suggestions}
          result={result}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          handleInputDelete={handleInputDelete}
        />
      )}
    </>
  );
};

export default Root;
