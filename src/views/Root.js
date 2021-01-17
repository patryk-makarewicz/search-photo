import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import GlobalStyle from 'theme/GlobalStyle';
import { data } from '../Data/data';
import StartView from './startView';
import ResultView from './resultView';

const Root = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(data);
  const [searchResultTitle, setSearchResultTitle] = useState('');
  const [result, setResult] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;

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
    const url = `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${API_KEY}`;
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
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          {result ? (
            <Redirect to="/photos" />
          ) : (
            <StartView
              inputValue={inputValue}
              suggestions={suggestions}
              handleInputChange={handleInputChange}
              handleInputSubmit={handleInputSubmit}
              handleInputDelete={handleInputDelete}
              handleSuggestOnClick={handleSuggestOnClick}
            />
          )}
        </Route>
        <Route path="/photos">
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
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;
