import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  await fs
    .readFile(PATH_DB, { encoding: 'utf8' })
    .then((data) => {
      const contacts = JSON.parse(data);
      console.log('Contacts:', contacts);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
readContacts();
