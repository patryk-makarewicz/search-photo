import React from 'react';

import Input from '../../components/Input/input';
import Suggestion from '../../components/Suggestion/suggestion';

const StartView = ({
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
  suggestions,
  handleSuggestOnClick,
}) => (
  <div>
    <h1>Search photo</h1>
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
  </div>
);

export default StartView;
