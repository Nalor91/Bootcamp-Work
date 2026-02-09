const fs = require('fs');
const process = require('process');
const axios = require('axios');

function output(text, out) {
    if (out) {
        fs.writeFile(out, text, 'utf8', err => {
            if (err) {
                console.error(`Couldn't write to ${out}:`, err.message);
                process.exit(1);
            }
        });
    } else {
        console.log(text);
    }
}

function cat(path, out) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${path}:`, err.message);
      process.exit(1);
    } else {
    output(data, out);
    }
  });
}

async function webCat(url, out) {
  try {
    let response = await axios.get(url);
    output(response.data, out);
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    process.exit(1);
  }
}

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}