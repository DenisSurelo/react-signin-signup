import { createSelector } from '@reduxjs/toolkit';
import { selectAllContacts } from './contactsSlice';

export const getContacts = selectAllContacts;

export const getFilter = state => state.filter || '';

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      (contact?.name ?? '')
        .toString()
        .toLowerCase()
        .includes(normalizedFilter)
    );
  }
);

