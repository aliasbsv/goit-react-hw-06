import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;

/* 
export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/add": {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case "contacts/delete": {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};


export const addContact = (contact) => {
  return {
    type: "contacts/add",
    payload: contact,
  };
};


export const deleteContact = (contactId) => {
  return {
    type: "contacts/delete",
    payload: contactId,
  };
};
 */
