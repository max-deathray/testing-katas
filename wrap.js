const wrap = (line, maxLen) => {
  let output = "";
  // let lineStart = 0;

  for (let i = 0; i < line.length; i++) {
    if (i === maxLen - 1) {
      if (line[i] === " ") {
        output += line.slice(0, i + 1);
        // lineStart = i+1;
        output += "\n";
        output += line.slice(i + 1);
        // break;
      }
    }
  }
  return output;
};
module.exports = wrap;
