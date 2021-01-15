import React from 'react';

import styles from './input.module.scss';

const Input = ({ handleInputChange, handleInputSubmit, inputValue, handleInputDelete }) => (
  <div className={styles.wrapper}>
    <div className={styles.innerWrapper}>
      <input
        className={styles.input}
        autoComplete="off"
        type="text"
        name="photo"
        placeholder="Search photo"
        onChange={handleInputChange}
        onKeyDown={(e) => handleInputSubmit(e)}
        value={inputValue}
      />
      <button className={styles.inputButton} type="button" onClick={handleInputDelete}>
        X
      </button>
    </div>
  </div>
);

export default Input;
