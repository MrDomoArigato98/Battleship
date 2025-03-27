import { experiments } from "webpack";
import {
  sum,
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./practice.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Capitalizes first character", () => {
  expect(capitalize("dom")).toBe("Dom");
});

test("Reverses a string", () => {
  expect(reverseString("I am reversed")).toBe("desrever ma I");
});

test("Calculator testing", () => {
  const calculator = new Calculator();
  expect(calculator.add(10, 5)).toBe(15);
  expect(calculator.add(20, 5)).toBe(25);
  expect(calculator.divide(20, 5)).toBe(4);
  expect(calculator.multiply(20, 5)).toBe(100);
});

test("Correctly overflows", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Correctly keeps original case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Correctly keeps punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Average", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Min", () => {
  const result = analyzeArray([5]);
  expect(result).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});
