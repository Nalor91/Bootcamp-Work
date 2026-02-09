const fs = require('fs');
const process = require('process');

function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${path}:`, err.message);
      process.exit(1);
    } else {
    console.log(data);
    }
  });
}

cat(process.argv[2]);