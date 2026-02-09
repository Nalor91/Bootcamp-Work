/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function makeText(text) {
  let mm = new markov.MarkovMachine(text);
  console.log(mm.makeText());
}

function makeTextFromFile(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      makeText(data);
    }
  });
}

async function makeTextFromURL(url) {
  try {
    let resp = await axios.get(url);
    makeText(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeTextFromFile(path);
} else if (method === "url") {
  makeTextFromURL(path);
} else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}