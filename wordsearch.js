const diag = require('./util');
const wordSearch = (letters, word) => {
  let wordCopy = word, wordReverse = wordCopy.split('').reverse().join('');
  const horizontalJoin = letters.map(ls => ls.join(''));
  let diagStr = [];
  for (let i = 0; i < letters[0].length; i++) {
    let subStr = '';
    let subDig = [];
    for (let j = 0; j < letters.length; j++) {
      subStr += letters[j][i];
      let subSubDig = [];
      for (let z = 0; z < letters.length; z++) {
        i - j === z ? subSubDig.push(letters[i][j]) : null;
      }
    }
    diagStr.push(subDig);
    if (subStr.includes(word) || subStr.includes(wordReverse)) {
      return true;
    }
  }
  
  for (let i = 0; i < horizontalJoin.length; i++) {
    if (horizontalJoin[i].includes(word) || horizontalJoin[i].includes(wordReverse)) {
      return true;
    }
  }
  if (diag(letters, word, wordReverse)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;