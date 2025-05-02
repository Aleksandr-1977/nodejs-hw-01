import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contacts = JSON.parse(data);
    // console.log('Contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
// readContacts();
