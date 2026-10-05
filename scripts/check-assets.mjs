// Run: npm run check — lists image files referenced in content.js that don't exist yet.
import fs from 'fs';
import { about, cases, finalImage } from '../src/js/content.js';
const files = ['assets/vinyl/vinyl.png', about.photo, ...(finalImage ? [finalImage] : []), ...cases.flatMap(c => c.media.map(m => `${c.dir}/${m}`))];
const missing = files.filter(f => !fs.existsSync(f));
console.log(`${files.length - missing.length}/${files.length} assets found`);
missing.forEach(f => console.log('MISSING', f));
