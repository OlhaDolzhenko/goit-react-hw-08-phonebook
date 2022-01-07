import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from '../../services/phonebook-api';

const fetchContacts = createAsyncThunk('phonebook/fetchContacts', async () => {
  const contacts = await phonebookAPI.fetchContacts();
  return contacts;
});

const addContact = createAsyncThunk('phonebook/addContact', async contact => {
  const contacts = await phonebookAPI.postContact(contact);
  return contacts;
});

const deleteContact = createAsyncThunk('phonebook/deleteContact', async id => {
  const contacts = await phonebookAPI.deleteContact(id);
  return contacts;
});

export default { addContact, deleteContact, fetchContacts };
