const fs = require('fs');
const path = require('path');

const target = path.join('.medusa', 'server', 'public');
const link = 'public';

fs.symlink(target, link, 'junction', (err) => {
  if (err) {
    console.error('Failed to create symlink:', err);
  } else {
    console.log(`Symlink created: ${link} → ${target}`);
  }
});
