import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async (path_db = PATH_DB) => {
  try {
    const contacts = await fs.readFile(path_db);
    return contacts.length > 0 ? JSON.parse(contacts) : [];
  } catch (error) {
    console.error('An error occurred during reading data: ', error);
    return [];
  }
};
