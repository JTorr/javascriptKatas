
//pattern = "#_" but switch for odd lines
//line = pattern * size/2 if even size
//line = pattern * size/2 + first character
//board = odd line, then even line, repeat

var chessboard = function(size) {
  var firstCharacter = "#",
      secondCharacter = "_",
      oddLines = [],
      evenLines = [],
      pattern,
      patternRepeats;
  if (size <= 1) {
    patternRepeats = 0;
  }
  else if (size === 2) {
    patternRepeats = 1;
  }
  else if (size % 2 === 0) {
    patternRepeats = (size / 2);
  }
  else {
    patternRepeats = (size + 1)/2;
  }

  for (var line = 0; line <= size; line++) {
    if (line % 2 === 0) {
      pattern = firstCharacter + secondCharacter;
      line = Array(patternRepeats).join(pattern);
      evenLines.push(line);
    }
    else {
      pattern = secondCharacter + firstCharacter;
      line = Array(patternRepeats).join(pattern);
      oddLines.push(line);
    }
    return oddLines, evenLines;
  }

  var board = oddLines.reduce(function(arr, row, index) {
    console.log("Arr: ", arr, "Line: ", row);
    arr.concat(row, evenLines[index]);
  }) 
  return console.log(board);

};

chessboard(8);

