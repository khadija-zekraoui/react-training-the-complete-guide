// SPREAD is used to split up array elements or object properties
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log("newNumbers", newNumbers);

const person = {
  name: "Lin",
  weight: 3,
};

const newPerson = {
  ...person,
  weight: 5, // update the value of an existing property
  age: "3 months", // new property
};
console.log("newPerson", newPerson);

const copiedPerson = {...person}; // SPREAD is used to copy an array or object
console.log('copiedPerson', copiedPerson);


//REST is used to merge a list of function arguments into an array

/* we write one argument but we may receive more than one and they
 will all be merged together into an array */

const filter = (...args) => args.filter((el) => el > 2);
console.log(filter(1,2,3,55));
