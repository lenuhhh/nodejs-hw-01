import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
   const contacts = await getAllContacts();
         contacts.pop();
      await writeContacts(contacts);
};

removeLastContact();
