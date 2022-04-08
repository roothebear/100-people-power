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
