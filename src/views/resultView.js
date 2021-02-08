import React from 'react';

import styled from 'styled-components';
import Input from '../components/Input/input';
import Photos from '../components/Photos/photos';

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
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
  searchResultTitle,
}) => (
  <Container>
    <Wrapper>
      <Input
        classNameInput="input input--background"
        classNameButton="input__button input__button--background"
        classNameContainer="input__container input__container--background "
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        inputValue={inputValue}
        handleInputDelete={handleInputDelete}
      />
      <Photos result={result} searchResultTitle={searchResultTitle} />
    </Wrapper>
  </Container>
);

export default ResultView;
