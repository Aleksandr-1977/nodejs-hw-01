import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);
export const PATH_DB = path.join(dirname, '../../src/db/db.json');
