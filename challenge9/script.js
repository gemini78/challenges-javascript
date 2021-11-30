"use strict";

const hiddenMessage = [
  "X",
  "X",
  "X",
  "X",
  "W",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  " ",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "D",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "O",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "N",
  "X",
  "X",
  "X",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  ",",
  "X",
  " ",
  "X",
];

const hiddenCode =
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX";

const ignoreX = (datas) => {

  let response = [];
  
  datas.map((data)=>{
    if (data != 'X') {
       response.push(data);
    }
  });
  
  return response.join("");
};


const decoder = (messageToDecode) => {
  let array = [];
  let number = 0;
  let character = '';

  for (let index = 0; index < messageToDecode.length; index++) {
    
    character = messageToDecode[index];

    if (character == "X") {
      continue;
    }

    number = parseInt(character);

    if (number && number % 2 == 0) {
      continue;
    }

    array.push(character);
  }

  return array.join(" ");
};

console.log(ignoreX(hiddenMessage));

console.log(decoder(hiddenCode));
