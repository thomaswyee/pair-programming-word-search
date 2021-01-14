const diag = (letters, word, wordReverse) => {
  let output, len = letters.length - letters[0].length >= 0 ? letters.length : letters[0].length;
  for (let z = 0; z < len; z++) {
    let subDiagNeg1 = '', subDiagNeg2 = '', subDiagPos1 = '', subDiagPos2 = '';
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        letters[i][j] === undefined ? null : i - j === z ? subDiagNeg1 += letters[i][j] : i - j === -z ? subDiagNeg2 += letters[i][j] : null;
        letters[j][i] === undefined ? null : j + i === z ? subDiagPos1 += letters[j][i] : j + i === z + 9 ? subDiagPos2 += letters[j][i] : null;
      }
    }
    subDiagNeg1.includes(word) || subDiagNeg1.includes(wordReverse) ? output = true : null;
    subDiagNeg2.includes(word) || subDiagNeg2.includes(wordReverse) ? output = true : null;
    subDiagPos1.includes(word) || subDiagPos1.includes(wordReverse) ? output = true : null;
    subDiagPos2.includes(word) || subDiagPos2.includes(wordReverse) ? output = true : null;
  }
  return output;
};

module.exports = diag;