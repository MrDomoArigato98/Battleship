function sum(a, b) {
  return a + b;
}

function capitalize(word = "") {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}

function reverseString(word = "") {
  return word.split("").reverse().join("");
}
class Calculator {
  add(a, b) {
    return a + b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

function caesarCipher(word = "", shiftFactor = 3) {
  //Values greater than 26 can just be solved with a modulo.
  shiftFactor = shiftFactor % 26;
  let cipher = [];
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (checkAlphabetical(char)) {
      let code = word.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        code = ((code - 65 + shiftFactor) % 26) + 65;
      } else if (code >= 97 && code <= 122) {
        code = ((code - 97 + shiftFactor) % 26) + 97;
      }
      cipher.push(String.fromCharCode(code));
    } else {
      cipher.push(char);
    }
  }
  return cipher.join("");
}

function checkAlphabetical(letter) {
  const isAlphabetic = /^[A-Za-z]+$/.test(letter);
  return isAlphabetic;
}

function analyzeArray(array = []) {
  const length = array.length;
  const max = Math.max(...array);
  const min = Math.min(...array);
  const average =
    array.reduce((accumulator, currentValue) => accumulator + currentValue) /
    length;

  return {
    average,
    min,
    max,
    length,
  };
}

export {
  sum,
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
};
