import axios from "axios";

axios.defaults.baseURL = "https://6838599d2c55e01d184cf497.mockapi.io/";

export const getContactsAsync = async () => {
  const { data } = await axios.get("contacts");
  return data;
};

export const addContactAsync = async (contact) => {
  const { data } = await axios.post("contacts", contact);
  console.log("add: ", data);
  return data;
};

export const deleteContactAsync = async (contactId) => {
  const { data } = await axios.delete(`contacts/${contactId}`);
  console.log("delete", data);
  return data;
};
