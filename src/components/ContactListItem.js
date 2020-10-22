import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onRemove }) => (
  <li>
    <span>
      {name}: {number}
    </span>
    <button type="button" className="deleteBtn" onClick={onRemove}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
