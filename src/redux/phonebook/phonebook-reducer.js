import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import changeFilter from './phonebook-actions';
import operations from './phonebook-operations';

const { fetchContacts, addContact, deleteContact } = operations;

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

// const loading = createReducer(false, {
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,

// })

export default combineReducers({
  items,
  filter,
  //loading,
});
