// console.log("test");

//POKEMON
class Pokemon {
  constructor(name, type, level, hp) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
  }

  attack(opponent) {
    console.log(`${this.name} attacked ${opponent.name}`);
    let lvl = this.level * 2;
  }

  receivedDamage(damage) {
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

  calculateDamage() {
    console.log(`${this.name} deal damage `);
  }
  powerUp() {}
}

//TRAINERS
class Trainer {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.pokemons = [];
  }

  choosePokemon(pokemon) {
    if (this.pokemons.length > 5) {
      console.log("You can only choose 6 Pokemon");
    } else {
      this.pokemons.push(pokemon);
      console.log(`${this.name} choose ${pokemon.name} as a pokemon`);
    }
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

//ADDING SUBCLASS USING POLYMORPSIM AND INHERITANCE

class FirePokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Fire", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} use FlameThrower on ${opponent.name}!`);

    if (opponent.type === "Earth") {
      let damage = this.level * Math.floor(Math.random() * (10 - 4)) + 4;
      opponent.receivedDamage(damage);
      console.log("SUPER EFFECTIVE");
      console.log(`${this.name} dealt ${damage} Damage to ${opponent.name}`);
    } else {
      let damage = this.level * 3;
      opponent.receivedDamage(damage);
    }
  }
}

class EarthPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Earth", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} use EarthDrive on ${opponent.name}!`);
    if (opponent.type === "Water") {
      let damage = this.level * Math.floor(Math.random() * (10 - 4)) + 4;
      opponent.receivedDamage(damage);
      console.log("SUPER EFFECTIVE");
    } else {
      let damage = this.level * 3;
      opponent.receivedDamage(damage);
    }
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Water", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} use WaterGun on ${opponent.name}!`);
    if (opponent.type === "Wind") {
      let damage = this.level * Math.floor(Math.random() * (10 - 4)) + 4;
      opponent.receivedDamage(damage);
      console.log("SUPER EFFECTIVE");
    } else {
      let damage = this.level * 3;
      opponent.receivedDamage(damage);
    }
  }
}

class WindPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Wind", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} use GustWing on ${opponent.name}!`);
    if (opponent.type === "Fire") {
      let damage = this.level * Math.floor(Math.random() * (10 - 4)) + 4;
      opponent.receivedDamage(damage);
      console.log("SUPER EFFECTIVE");
    } else {
      let damage = this.level * 3;
      opponent.receivedDamage(damage);
    }
  }
}

class DarkPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Dark", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} use BlackHole on ${opponent.name}!`);
    let damage = this.level * 3;
    opponent.receivedDamage(damage);
  }
}

//BATTLEGROND
class Battle {
  constructor(pokemon1, pokemon2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  startBattle() {
    console.log(
      `The battle Between ${this.pokemon1.name} and ${this.pokemon2.name} has begun! `
    );

    let game = true;

    while (game) {
      this.pokemon1.attack(this.pokemon2);
      if (this.pokemon2.hp > 0) {
        this.pokemon2.attack(this.pokemon1);
      }

      if (this.pokemon1.hp <= 0 || this.pokemon2.hp <= 0) {
        game = false;
      }

      if (this.pokemon1.hp <= 0) {
        console.log(`${this.pokemon1.name} has lost the battle!`);
      }

      if (this.pokemon2.hp <= 0) {
        console.log(`${this.pokemon2.name} has lost the battle`);
      }
    }
  }
}

//CREATING POKEMON
const charizard = new FirePokemon("Charizard", 10, 100);
const stone = new EarthPokemon("Stone", 10, 100);
const starfish = new WaterPokemon("Starfish", 10, 100);
const birdy = new WindPokemon("Birdy", 10, 100);
const gengar = new DarkPokemon("Gengar", 10, 100);

//CREATING NEW TRAINER ADD ADD POKEMONS IN THEIR TEAM
const ash = new Trainer("Ash", "Male");
ash.choosePokemon(charizard);
let ashPokemon = ash.selectPokemon(0);
ash.showPokemon();

const brok = new Trainer("Brok", "Male");
brok.choosePokemon(stone);
let brokPokemon = brok.selectPokemon(0);
brok.showPokemon();

const misty = new Trainer("Misty", "Female");
misty.choosePokemon(starfish);
let mistyPokemon = brok.selectPokemon(0);
misty.showPokemon();

const lulu = new Trainer("Lulu", "Female");
lulu.choosePokemon(birdy);
let luluPokemon = lulu.selectPokemon(0);
lulu.showPokemon();

const jiji = new Trainer("Jiji", "Female");
jiji.choosePokemon(gengar);
let jijiPokemon = jiji.selectPokemon(0);
jiji.showPokemon();

//BATTLE BEGIN
let battle = new Battle(charizard, stone);
battle.startBattle();
