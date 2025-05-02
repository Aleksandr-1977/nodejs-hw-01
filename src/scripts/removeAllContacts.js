import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Нет контактов для удаления.');
      return;
    }
    await writeContacts([]);
    console.log('Все контакты удалены.');
  } catch (error) {
    console.error('Error:', error);
  }
};

removeAllContacts();
