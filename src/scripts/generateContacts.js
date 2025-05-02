import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const myContacts = await readContacts();
    let myNewContact = [];

    for (let i = 0; i < number; i++) {
      myNewContact.push(createFakeContact());
    }

    await writeContacts([...myContacts, ...myNewContact]);
    return myNewContact;
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
