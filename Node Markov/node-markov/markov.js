/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();
     for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = (i === this.words.length - 1) ? null : this.words[i + 1];
      if (chains.has(word)) chains.get(word).push(nextWord);
      else {
        chains.set(word, [nextWord]);
      }       
    }
    this.chains = chains;
  }

  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
      let keys = Array.from(this.chains.keys());
      let key = MarkovMachine.choice(keys);
      let out = [];

      while (out.length < numWords && key !== null) {
      out.push(key);
      let nextWords = this.chains.get(key);
      key = MarkovMachine.choice(nextWords);
    }
    return out.join(" ");
  }
}

module.exports = {
  MarkovMachine
};