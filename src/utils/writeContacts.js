import { PATH_DB } from '../constants/contacts.js';
// import { readContacts } from './readContacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};
writeContacts();
