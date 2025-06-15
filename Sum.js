function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter numbers only");
    return;
  }

  //   Erorr check for values of a and b if less than 1 then we will show a error

  if (a < 1 || b < 1) {
    throw new Error("Please enter values greater than 1");
    return;
  }
  const addition = a + b;
  console.log(addition);

  return;
}

sum(1, 3);
