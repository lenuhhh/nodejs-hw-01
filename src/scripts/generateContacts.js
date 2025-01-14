import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
    let contacts = await readContacts();

     for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
 }

  writeContacts(contacts);
};


generateContacts(5);
