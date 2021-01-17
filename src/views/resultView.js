import React from 'react';

import styled from 'styled-components';
import Input from '../components/Input/input';
import Photos from '../components/Photos/photos';
import Suggestion from '../components/Suggestion/suggestion';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: inline;
  width: 1320px;
  padding: 20px;
`;

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
  <Container>
    <Wrapper>
      <Input
        classNameInput="input input--result"
        classNameButton="input__button input__button--result"
        classNameContainer="input__container input__container--result "
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        inputValue={inputValue}
        handleInputDelete={handleInputDelete}
      />
      <Suggestion
        classNameContainer="list__container list__container--result"
        suggestions={suggestions}
        inputValue={inputValue}
        handleSuggestOnClick={handleSuggestOnClick}
      />
      <Photos result={result} searchResultTitle={searchResultTitle} />
    </Wrapper>
  </Container>
);

export default ResultView;
