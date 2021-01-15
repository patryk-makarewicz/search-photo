import React from 'react';

import styles from './startView.module.scss';
import Header from '../../components/Header/header';
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
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Header />
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
  </div>
);

export default StartView;
