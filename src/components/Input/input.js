import React from 'react';
import PropTypes from 'prop-types';

import { FaSearch } from 'react-icons/fa';

import './input.scss';

const Input = ({
  handleInputChange,
  handleInputSubmit,
  inputValue,
  handleInputDelete,
  classNameButton,
  classNameContainer,
  classNameInput,
}) => {
  return (
    <div className={classNameContainer}>
      <div className="input__icon">
        <FaSearch />
      </div>
      <div className="input__wrapper">
        <input
          className={classNameInput}
          autoComplete="off"
          type="text"
          name="photo"
          placeholder="Search photo"
          onChange={handleInputChange}
          onKeyDown={(e) => handleInputSubmit(e)}
          value={inputValue}
        />
        {inputValue.length >= 1 ? (
          <button className={classNameButton} type="button" onClick={handleInputDelete}>
            X
          </button>
        ) : null}
      </div>
    </div>
  );
};

Input.propTypes = {
  classNameContainer: PropTypes.string,
};

Input.defaultProps = {
  classNameContainer: '',
};

export default Input;
