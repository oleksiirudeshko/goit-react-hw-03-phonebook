import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <span>Find name</span>
      <input
        type="text"
        value={value}
        onChange={({ target }) => onChangeFilter(target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
