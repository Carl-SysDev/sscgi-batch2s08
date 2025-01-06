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

// Object Oriented Programming (OOP)

// Programming Style based on classes and objects, group data(properties) and methods(actions)

// Class - Blueprint, template for an object
// Object  - Instance of a class
// Instance - refers to an object created from a class or constructor function
// Constructor - a special method used in a class to initialzed objects.

const person = {
  name: "Carl",
  age: 24,
  greet: function () {
    //this refer to the current objec(person)
    console.log(`Hello My name is ${this.name} and i am ${this.age} years old`);
  },
};

person.greet();

class Person {
  constructor(name, age) {
    this.name = name; // initializing the 'name' property
    this.age = age; // initializing the 'age' property
  }

  introduce() {
    console.log(`Hello My name is ${this.name} and i am ${this.age} years old`);
  }
}

// create instance using the constructor

const person1 = new Person("Harold", 24);
const person2 = new Person("Arth", 26);

person1.introduce();
person2.introduce();

class Car {
  constructor(model) {
    this.model = model;
  }

  start() {
    console.log(`${this.model} is starting . . . .`);
  }
}

const car1 = new Car("Toyota");

car1.start();

//Pokemon Game

/*
    Mini-Activity
        create a function for receievedDamage() and heal()
    
*/
class Pokemon {
  constructor(name, type, level, hp) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
  }

  attack(opponent) {
    console.log(`${this.name} attacked ${opponent.name}!`);
    let damage = this.level * 2;
    // console.log(`${this.name} leveled up to ${damage}`);
  }

  receivedDmg(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      console.log(`${this.name} has fainted`);
    } else {
      console.log(`${this.name} has ${this.hp} HP left`);
    }
  }

  heal() {
    this.hp += 10;
    console.log(`${this.name} has use potion and heal [${this.hp}] HP left `);
  }
}

let pikachu = new Pokemon("Pikachu", "Electric", 5, 100);

let charmander = new Pokemon("Charmander", "Fire", 5, 100);

// pikachu.attack(charmander);
// charmander.receivedDmg(30);
// charmander.attack(pikachu);
// charmander.heal();

/*
    MINI-Activity create Trainers and Pokemon to be used in battle
*/

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemons = [];
  }

  choosePokemon(pokemon) {
    if (this.pokemons.length > 5) {
      console.log("You can only choose 6 Pokemon");
    } else {
      this.pokemons.push(pokemon);
      console.log(`${this.name} choose ${pokemon.name} as a pokemon`);
    }

    // console.log(this.pokemons.length);
  }

  selectPokemon(i) {
    return this.pokemons[i];
  }

  showPokemon() {
    console.log(`${this.name}'s Pokemons: `);
    this.pokemons.forEach((pokemon) => {
      console.log(`${pokemon.name}`);
    });
  }
}

//trainers
const carl = new Trainer("CARL");
carl.choosePokemon(pikachu);

const arth = new Trainer("ARTH");
arth.choosePokemon(charmander);

//select pokemon
let carlpokemon = carl.selectPokemon(0);
let arthpokemon = arth.selectPokemon(0);

//Battle Scenario
carlpokemon.attack(arthpokemon);
arthpokemon.receivedDmg(25);
arthpokemon.attack(carlpokemon);
carlpokemon.receivedDmg(25);
carlpokemon.heal();

//ABSTRACTION
class Battle {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  startBattle() {
    console.log(
      `The battle Between ${this.pokemon1.name} and ${this.pokemon2.name} has begun! `
    );

    while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
      this.pokemon1.attack(this.pokemon2);
      if (this.pokemon2.hp > 0) {
        this.pokemon2.attack(this.pokemon1);
      }
    }
    if (this.pokemon2.hp <= 0) {
      console.log(`${this.pokemon1.name} has lost the battle!`);
    } else {
      console.log(`${this.pokemon2.name} has lost the battle`);
    }
  }
}

let battle = new Battle(carlpokemon, arthpokemon);

// inheritance
// extend the pokemo class int specific type of pokemon
// Type of pokemon
// -ElectricPokemon
// -FirePokemon
/*
    each subclass will inherit prooperties and methods from the base 
    pokemon class but can also have its own specific behavior

*/

class ElectrciPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Electric", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} use ThunderBold on ${opponent.name}!`);
    let damage = this.level * 3;
    opponent.receivedDmg(damage);
  }
}

class FirePokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Fire", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} use FlameThrower on ${opponent.name}!`);
    let damage = this.level * 3;
    opponent.receivedDmg(damage);
  }
}

const charizard = new FirePokemon("Charizard", 10, 100);

const pikachu2 = new ElectrciPokemon("Pikachu", 10, 100);

charizard.attack(pikachu2);

// polymorphism the ability of different classes to respond to the same method call in a way that’s specific to their type. It allows one interfaces(method) to be used for a general class of actions with each subclass implement the method in its own way

/**
 * method overriding
 *  - subclass can provide their own specific implementation
 *    of a method that is already defined in the parent calss
 *
 *
 * method overloading
 *  - multiple method with the same name can be defined with different paramenters,
 *
 * dynamic method resolution
 *  - the method that gets called depends on the object type
 *  (not the reference type), which is determined in runtime
 */
