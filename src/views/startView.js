import React from 'react';

import styled from 'styled-components';
import background from '../assets/mircea-solomiea-Vw_zI3JUuN0-unsplash.jpg';
import Header from '../components/Header/header';
import Input from '../components/Input/input';
import Suggestion from '../components/Suggestion/suggestion';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 15%;
  width: 1320px;
  padding: 20px;
`;

const StartView = ({
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
  suggestions,
  handleSuggestOnClick,
}) => (
  <Container>
    <Wrapper>
      <Header />
      <Input
        classNameInput="input"
        classNameButton="input__button"
        classNameContainer="input__container"
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        inputValue={inputValue}
        handleInputDelete={handleInputDelete}
      />
      <Suggestion
        classNameContainer="list__container"
        suggestions={suggestions}
        inputValue={inputValue}
        handleSuggestOnClick={handleSuggestOnClick}
      />
    </Wrapper>
  </Container>
);

export default StartView;
