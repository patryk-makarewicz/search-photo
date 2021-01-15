import React from 'react';
import { FaSearch } from 'react-icons/fa';

import styles from './input.module.scss';

const Input = ({ handleInputChange, handleInputSubmit, inputValue, handleInputDelete }) => (
  <div className={styles.wrapper}>
    <div className={styles.inputIcon}>
      <FaSearch />
    </div>
    <div className={styles.inputWrapper}>
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
      {inputValue.length >= 1 ? (
        <button className={styles.inputButton} type="button" onClick={handleInputDelete}>
          X
        </button>
      ) : null}
    </div>
  </div>
);

export default Input;
