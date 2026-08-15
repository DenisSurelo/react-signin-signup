export const getContacts = state => state.contacts.items || [];
export const getFilter = state => state.filter || '';

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state).toLowerCase();

  return contacts.filter(contact =>
    (contact.name || '').toLowerCase().includes(filter)
  );
};
