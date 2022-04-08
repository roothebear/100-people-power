for (let number = 1; number <= 100; number++) {
  let result = [];
  if (number % 3 === 0) {
    result.push("People");
  }
  if (number % 5 === 0) {
    result.push("Power");
  }
  console.log(result.length > 0 ? result.join(" ") : number.toString());
}

const generateArray = (number = 100, divisor1 = 3, divisor2 = 5, urlArray) => {
  let result = [];

  for (let num = 1; num <= number; num++) {
    let element = { key: num, value: num.toString() };
    let newValue = [];

    if (num % divisor1 === 0) {
      newValue.push("People");
    }
    if (num % divisor2 === 0) {
      newValue.push("Power");
    }
    newValue.length > 0
      ? (element["value"] = newValue.join(" "))
      : (element["value"] = num.toString());
    result.push(element);
    element["url"] = urlArray[Math.floor(number * Math.random())];
  }
  return result;
};

export default generateArray;
