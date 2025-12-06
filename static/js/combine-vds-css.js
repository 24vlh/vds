const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../../css');   // your /css directory
const OUT_FILE = path.join(__dirname, 'vds.css');

// Explicit top-to-bottom order
const FIXED_ORDER = [
    'primitives.css',
    'themes/graphite.css',
    'base.css',
    'layout.css',
    'identity.css'
];

// Read all CSS files in directory
const allFiles = fs.readdirSync(ROOT + '/components')
    .filter(f => f.endsWith('.css'));

// Remove fixed-order files from the “other files”
const remaining = allFiles.filter(f => !FIXED_ORDER.includes(f))
    .map(f => path.join('components', f))
    .sort(); // alphabetical order

// Build final ordered list
const orderedFiles = [...FIXED_ORDER, ...remaining];

// Merge
let output = '';

orderedFiles.forEach(file => {
    const filePath = path.join(ROOT, file);
    const content = fs.readFileSync(filePath, 'utf8');
    output += `/* --- ${file} --- */\n` + content + '\n\n';
});

fs.writeFileSync(OUT_FILE, output, 'utf8');

console.log('VDS CSS merged →', OUT_FILE);
