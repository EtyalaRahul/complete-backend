function delayFunction(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("promsie lecuture starts");
delayFunction(2000).then(() => console.log("after 2 seconds promise resolved"));
console.log("end");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) reject("cannot perform divison by zero");
    else resolve(num1 / num2);
  });
}

divideFn(10, 0)
  .then((res) => console.log(res))
  .catch((err) => {
    console.log("Error occured");
  });
