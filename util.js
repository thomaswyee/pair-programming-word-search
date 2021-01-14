const diag = (letters, word) => {
  let diagoJoin = [], wordCopy = word, wordReverse = wordCopy.split('').reverse().join('');
  let len = letters.length - letters[0].length >= 0 ? letters.length : letters[0].length;
  for (let z = 0; z < len; z++) {
    let subDiagNeg1 = '';
    let subDiagNeg2 = '';
    let subDiagPos1 = '';
    let subDiagPos2 = '';
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        letters[i][j] === undefined ? null : i - j === z ? subDiagNeg1 += letters[i][j] : i - j === -z ? subDiagNeg2 += letters[i][j] : null;
        letters[j][i] === undefined ? null : j + i === z ? subDiagPos1 += letters[j][i] : j + i === z + 9 ? subDiagPos2 += letters[j][i] : null;
      }
    }
    subDiagNeg1.length >= word.length ? diagoJoin.push(subDiagNeg1) : null;
    subDiagNeg2.length >= word.length ? diagoJoin.push(subDiagNeg2) : null;
    subDiagPos1.length >= word.length ? diagoJoin.push(subDiagPos1) : null;
    subDiagPos2.length >= word.length ? diagoJoin.push(subDiagPos2) : null;
  }
  for (let x of diagoJoin) {
    if (x.includes(word) || x.includes(wordReverse)) {
      return true;
    }
  }
  return false;
};

module.exports = diag;