const fs = require('fs');
const process = require('process');
const axios = require('axios');

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

async function webCat(url) {
  try {
    let response = await axios.get(url);
    console.log(response.data);
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    process.exit(1);
  }
}

const pathOrUrl = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}