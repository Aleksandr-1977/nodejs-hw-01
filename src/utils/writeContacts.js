import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};
// writeContacts([
//   {
//     id: '49e75826-140e-4148-82a7-27b98b1b5f28',
//     name: 'Jana Kerluke',
//     phone: '1-423-375-0192',
//     email: 'Ronny_Pagac@hotmail.com',
//     job: 'Customer Marketing Representative',
//   },
// ]);
