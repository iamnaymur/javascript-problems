// ~ Task 1
const reverseString = (inputString) => {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
};

console.log(reverseString("Hello, World!"));
