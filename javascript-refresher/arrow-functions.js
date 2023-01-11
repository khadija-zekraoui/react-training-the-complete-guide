// normal function
function normalPrintMyName(name) {
  console.log("printMyName ~ name", name);
}

// arrow function
// with arrow functions we don't have problems using this
const arrowPrintMyName = (name) => {
  console.log("arrowPrintMyName ~ name", name);
};

const multiply = number => number * 2;

arrowPrintMyName("Lin");
console.log(multiply(6));
