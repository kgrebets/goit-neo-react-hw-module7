import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  createContactsThunk,
  getContactsThunk,
  removeContactsThunk,
} from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  items: null,
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload: contacts }) => {
        state.items = contacts;
      })
      .addCase(createContactsThunk.fulfilled, (state, { payload: contact }) => {
        state.items.push(contact);
      })
      .addCase(removeContactsThunk.fulfilled, (state, { payload: id }) => {
        state.items = state.items.filter((contact) => contact.id !== id);
      })

      //pending
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          createContactsThunk.pending,
          removeContactsThunk.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      // rejected
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          createContactsThunk.rejected,
          removeContactsThunk.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      )

      // fulfilled
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          createContactsThunk.fulfilled,
          removeContactsThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    if (!contacts) return null;
    
    return contacts.filter((x) =>
      x.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
