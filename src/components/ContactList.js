import React from 'react';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onRemovecontact }) => {
  if (contacts.length > 0) {
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemovecontact(id)}
          />
        ))}
      </ul>
    );
  } else return null;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemovecontact: PropTypes.func.isRequired,
};

export default ContactList;
