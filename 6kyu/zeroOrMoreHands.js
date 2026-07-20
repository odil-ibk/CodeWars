/*
Description:

Touch typing is a typing technique where each hand is responsible for specific keys on the keyboard.

In this kata, you will simulate this behaviour using a simplified keyboard layout based on a QWERTY keyboard.
Keyboard layout

Left hand letters:

"qwert"
"asdfg"
"zxcvb"

Right hand letters:

"yuiop"
"hjkl"
"nm"

Task

Write a function that receives a single lowercase word ( without any spaces ), and returns:

    NONE if the word is empty
    LEFT if the word can be typed using only the left hand
    RIGHT if the word can be typed using only the right hand
    BOTH if the word requires both hands

The word will be encoded as an iterable, yielding strings of single letters.
Rules

    Input contains only lowercase letters a to z
    Use only the keyboard layout provided above
    The word can be infinite ( this will only be tested with words with a finite prefix typed on both sides of the keyboard )

Preloaded

Use Hand = [ NONE, LEFT, RIGHT, BOTH ] defined in Preloaded.
Hand supplies a well-defined mapping to and from numbers. Its use is optional.
The return value must be one of NONE, LEFT, RIGHT, BOTH.
Examples

""       ->  NONE
"gaffe"  ->  LEFT
"cards"  ->  LEFT
"milk"   ->  RIGHT
"pill"   ->  RIGHT
"type"   ->  BOTH

*/

function whichHand(word) {
  const Hand = ["none", "left", "right", "both"];
  const leftHand = "qwertasdfgzxcvb".split("");
  const rightHand = "yuiophjklnm".split("");
  if (word.length === 0) return Hand[0];
  let checkingWordLetters = [];
  for (let i = 0; i < word.length; i++) {
    const el = word[i];
    if (leftHand.includes(el)) {
      checkingWordLetters.push("left");
    } else checkingWordLetters.push("right");
  }
  const findingSide = new Set(checkingWordLetters);
  findingSide;
  if (findingSide.has(Hand[1]) && findingSide.size === 1) {
    return Hand[1];
  } else if (findingSide.has(Hand[2]) && findingSide.size === 1) {
    return Hand[2];
  } else {
    return Hand[3];
  }
}
console.log(whichHand("mom"));

// Better Solution:
/* 
function whichHand(word) {
  const left = new Set("qwertasdfgzxcvb");
  const right = new Set("yuiophjklnm");

  let leftUsed = false;
  let rightUsed = false;
  let empty = true;

  for (const letter of word) {
    empty = false;

    if (left.has(letter)) {
      leftUsed = true;
    } else if (right.has(letter)) {
      rightUsed = true;
    }

    if (leftUsed && rightUsed) {
      return BOTH;
    }
  }

  if (empty) return NONE;
  if (leftUsed) return LEFT;
  return RIGHT;
}
*/
