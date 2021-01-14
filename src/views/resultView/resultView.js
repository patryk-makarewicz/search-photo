import React from 'react';

import Input from '../../components/Input/input';
import Suggestion from '../../components/Suggestion/suggestion';

const ResultView = ({
  result,
  suggestions,
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
  searchResultTitle,
  handleSuggestOnClick,
}) => (
  <div>
    <h1>Results</h1>
    <Input
      handleInputChange={handleInputChange}
      handleInputSubmit={handleInputSubmit}
      inputValue={inputValue}
      handleInputDelete={handleInputDelete}
    />
    <Suggestion
      suggestions={suggestions}
      inputValue={inputValue}
      handleSuggestOnClick={handleSuggestOnClick}
    />
    <div>
      <h2>{searchResultTitle}</h2>
    </div>
    <div>
      {result.map((picture) => (
        <div key={picture.id}>
          <img src={picture.urls.small} alt="Your search result" />
          <div>
            {picture.tags.map((tag) => (
              <p key={tag.title}> {tag.title}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ResultView;
