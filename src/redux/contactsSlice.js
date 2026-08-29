import { createSlice, createEntityAdapter, nanoid } from '@reduxjs/toolkit';

const contactsAdapter = createEntityAdapter();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState(),
  reducers: {
    addContact: {
      reducer(state, action) {
        contactsAdapter.addOne(state, action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContact(state, action) {
      contactsAdapter.removeOne(state, action.payload);
    },
    setContacts(state, action) {
      contactsAdapter.setAll(state, action.payload);
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;

export const {
  selectAll: selectAllContacts,
  selectById: selectContactById,
} = contactsAdapter.getSelectors(state => state.contacts);

export default contactsSlice.reducer;
