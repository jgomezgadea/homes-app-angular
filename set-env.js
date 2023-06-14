import { writeFile } from 'fs';
import * as dotenv from 'dotenv';
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
dotenv.config();
// `environment.ts` file structure
const envConfigFile = `export const environment = {
   apiUrl: '${process.env['API_URL'] ?? 'http://localhost:3000'}',
};
`;
console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
   }
});