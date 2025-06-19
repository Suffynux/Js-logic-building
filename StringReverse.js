// Reverse the string
const reverseString = (value) => {
  console.log(typeof value);
  //   Check for verfiying the value type
  if (typeof value === "string") {
    let result = "";

    for (let i = value.length - 1; i >= 0; i--) {
      result = result + value[i];
    }
    return result;
  } else {
    return "Value should be string onlly";
  }
};

console.log(reverseString(232));
