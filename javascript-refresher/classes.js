//ES6
/*class Human {
  constructor() {
    this.gender = 'female';
  }

  printGender() {
    console.log("printGender ~ gender", this.gender);
  }
}

class Person extends Human{
  constructor() {
    super();
    this.name = "lin";
  }

  printMyName() {
    console.log("printMyName ~ name", this.name);
  }
}*/

//ES6
class Human {
  gender = "female";

  printGender = () => {
    console.log("printGender ~ gender", this.gender);
  };
}

class Person extends Human {
  name = "lin";

  printMyName = () => {
    console.log("printMyName ~ name", this.name);
  };
}
const person = new Person();
person.printMyName();
person.printGender();
