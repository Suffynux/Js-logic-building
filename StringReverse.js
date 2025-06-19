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
    throw new Error("Value should be string onlly")
  }
};

console.log(reverseString(232));

// String reverse using array method
const reverseString2 = (value) => {
  // Check for the value should be string
  if (typeof value == "number") {
    console.log("Value should be a string");
    return;
  }
  // for spliting the array means breaking the string and saving into an array
  const splitedArray = value.split("");
  // It will reverse the array
  const reversedString = splitedArray.reverse();
  // For joining the splited value

  const finalResult = reversedString.join("");

  console.log("Reverse value is ", finalResult);
  return;
};

// reverseString2("name");
reverseString2(12);
