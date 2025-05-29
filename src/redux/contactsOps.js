import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactAsync, deleteContactAsync, getContactsAsync } from "../api";

export const getContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getContactsAsync();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContactsThunk = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      return await addContactAsync(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const c = await deleteContactAsync(contactId);
      return c.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
