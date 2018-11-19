const wrap = (line, maxLen) => {
  let output = '';
  // let lineStart = 0;

  for (let i = 0; i < line.length; i++) {
    if (i === maxLen - 1) {
      if (line[i] === ' ') {
        output += line.slice(0, i + 1);
        // lineStart = i+1;
        output += '\n';
        output += line.slice(i + 1);
      } else {
        let tempSlice = line.slice(0, maxLen);
        let lastSpace = tempSlice.lastIndexOf(' ');
        output += line.slice(0, lastSpace + 1);
        output += '\n';
        output += line.slice(lastSpace + 1);
      }
    }
  }
  return output;
};
module.exports = wrap;
