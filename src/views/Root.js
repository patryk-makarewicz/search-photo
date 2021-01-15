import React, { useState } from 'react';
import axios from 'axios';
import GlobalStyle from 'theme/GlobalStyle';
import { data } from '../Data/data';

import StartView from './startView/startView';
import ResultView from './resultView/resultView';

const Root = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(data);
  const [searchResultTitle, setSearchResultTitle] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState(false);
  const clientID = 'ZbCzoT4wt2n2oSOfJIJ-lc-dn42o2hLycF2kNtaZyZ0';

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

  const fetchResults = () => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${clientID}`;
    axios
      .get(url)
      .then((response) => setResult(response.data.results))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };

  const handleSuggestOnClick = () => {
    setInputValue('');
    setSearchResultTitle(suggestions);
    fetchResults();
  };

  const handleInputSubmit = (e) => {
    if (e.keyCode === 13) {
      setSearchResultTitle(inputValue);
      fetchResults();
      setInputValue('');
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
          handleSuggestOnClick={handleSuggestOnClick}
        />
      ) : (
        <ResultView
          inputValue={inputValue}
          suggestions={suggestions}
          result={result}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          handleInputDelete={handleInputDelete}
          handleSuggestOnClick={handleSuggestOnClick}
          searchResultTitle={searchResultTitle}
        />
      )}
    </>
  );
};

export default Root;
