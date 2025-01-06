// console.log("hi");

function printName() {
  console.log("My name is Carl");
}

printName();

//FUNCTION EXPRESSION
let variableFunction = function () {
  console.log("ppp");
};

variableFunction();

const constFunc = function () {
  console.log("initialized with const");
};

//Parameter and Arguments

function printName(name) {
  console.log("My name is " + name);
}

printName("Juan"); // this is called Arguments

// "name" is called parameter
// A Parameter acts as a named variable
// containers that exits only inside of a function
// it is used to store information that is provided to a function
// wheb it is called

// An argument is a value passed when invoking a function,
// this argument is then stored as the paramenter within the function

printName("CHICHI");
printName("POOF", 12);

function argumentFunction() {
  console.log(
    "this function was passed as argument before the message was printed."
  );
}

function invokeFunction(argumentFunction) {
  argumentFunction();
}

invokeFunction(argumentFunction);
// invokeFunction();
// console.log(argumentFunction);
