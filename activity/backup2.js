// console.log("test");

//POKEMON
class Pokemon {
  constructor(name, type, level, hp) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    // this.atk = atk;
    // this.def = def;
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
    let randomhp = Math.floor(Math.random() * (15 - 5)) + 5;
    this.hp += randomhp;
    console.log(
      `${this.name} active unique skill passive and heal [${randomhp}] HP `
    );
  }

  calculateDamage() {
    console.log(`${this.name} deal damage `);
  }

  // criticalDamage() {
  //   let damage = this.level * Math.floor(Math.random() * (10 - 7)) + 7; //DEALING CRITCAL HIT ON MASMAHINA
  //   receivedDamage(damage);
  // }

  powerUp() {
    this.hp += 20;
    console.log(`${this.name} use PowerUp +50 HP`);
  }

  isDead() {
    return this.hp <= 0;
  }
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
      console.log(`${this.name} add ${pokemon.name} in the Team`);
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

  nextPokemon() {
    return this.pokemons.find((pokemon) => !pokemon.isDead());
  }

  pokemonLeft() {
    return this.pokemons.some((pokemon) => !pokemon.isDead());
  }
}

//ADDING SUBCLASS USING POLYMORPSIM AND INHERITANCE

class FirePokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Fire", level, hp);
  }

  attack(opponent) {
    console.log("");
    console.log(`${this.name} use FlameThrower on ${opponent.name}!`);

    if (opponent.type === "Earth") {
      let damage = this.level * Math.floor(Math.random() * (10 - 7)) + 7; //DEALING CRITCAL HIT ON MASMAHINA
      opponent.receivedDamage(damage);
      console.log("SUPER EFFECTIVE");
      // console.log(`${this.name} ${this.calculateDamage}`);

      console.log(
        `${this.name} dealt ${damage} Critical Damage to ${opponent.name}`
      );
      opponent.heal(); //UNIQUE SKILL HEAL
    } else {
      let damage = this.level * Math.floor(Math.random() * (5 - 2)) + 2;
      opponent.receivedDamage(damage);
      console.log(`${this.name} dealt ${damage} Damage to ${opponent.name}`);
    }
  }
}

class EarthPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Earth", level, hp);
  }

  attack(opponent) {
    console.log("");
    console.log(`${this.name} use EarthDrive on ${opponent.name}!`);
    if (opponent.type === "Water") {
      let damage = this.level * Math.floor(Math.random() * (10 - 7)) + 7;
      opponent.receivedDamage(damage);
      console.log("SUPER EFFECTIVE");
      console.log(
        `${this.name} dealt ${damage} Critical Damage to ${opponent.name}`
      );
      opponent.heal();
    } else {
      let damage = this.level * Math.floor(Math.random() * (5 - 2)) + 2;
      opponent.receivedDamage(damage);
      console.log(`${this.name} dealt ${damage} Damage to ${opponent.name}`);
    }
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Water", level, hp);
  }

  attack(opponent) {
    console.log("");
    console.log(`${this.name} use WaterGun on ${opponent.name}!`);
    if (opponent.type === "Wind") {
      let damage = this.level * Math.floor(Math.random() * (10 - 7)) + 7;
      opponent.receivedDamage(damage);
      console.log("SUPER EFFECTIVE");
      console.log(
        `${this.name} dealt ${damage} Critical Damage to ${opponent.name}`
      );
      opponent.heal();
    } else {
      let damage = this.level * Math.floor(Math.random() * (5 - 2)) + 2;
      opponent.receivedDamage(damage);
      console.log(`${this.name} dealt ${damage} Damage to ${opponent.name}`);
    }
  }
}

class WindPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Wind", level, hp);
  }

  attack(opponent) {
    console.log("");
    console.log(`${this.name} use GustWing on ${opponent.name}!`);
    if (opponent.type === "Fire") {
      let damage = this.level * Math.floor(Math.random() * (10 - 7)) + 7;
      opponent.receivedDamage(damage);
      console.log("SUPER EFFECTIVE");
      console.log(
        `${this.name} dealt ${damage} Critical Damage to ${opponent.name}`
      );
      opponent.heal();
    } else {
      let damage = this.level * Math.floor(Math.random() * (5 - 2)) + 2;
      opponent.receivedDamage(damage);
      console.log(`${this.name} dealt ${damage} Damage to ${opponent.name}`);
    }
  }
}

class DarkPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Dark", level, hp);
  }

  attack(opponent) {
    console.log("");
    console.log(`${this.name} use BlackHole on ${opponent.name}!`);
    let damage = this.level * Math.floor(Math.random() * (5 - 2)) + 2;
    opponent.receivedDamage(damage);
    console.log(`${this.name} dealt ${damage} Damage to ${opponent.name}`);
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
      `The battle Between ${this.pokemon1.name} 🆚 ${this.pokemon2.name} has begun! `
    );
    console.log("");
    // let powers = Math.floor(Math.random() * 2);
    let game = true;

    // console.log(powers);

    while (game) {
      console.log("");
      console.log(`👊 ${this.pokemon1.name} Turn to Attack.`);
      this.pokemon1.attack(this.pokemon2);
      if (this.pokemon2.hp > 0) {
        console.log("");
        console.log(`👊 ${this.pokemon2.name} Turn to Attack.`);
        this.pokemon2.attack(this.pokemon1);
      }

      if (this.pokemon1.hp <= 0 || this.pokemon2.hp <= 0) {
        game = false;
      }

      if (this.pokemon1.hp <= 0) {
        console.log(`${this.pokemon2.name} has Win the battle!`);
        this.pokemon2.level++;
        console.log(
          `${this.pokemon2.name} has level up to ${this.pokemon2.level}`
        );
        console.log("************************************");
      }

      if (this.pokemon2.hp <= 0) {
        console.log(`${this.pokemon1.name} has Win the battle`);
        this.pokemon1.level++;
        console.log(
          `${this.pokemon1.name} has level up to ${this.pokemon1.level}`
        );
        console.log("************************************");
      }
    }
  }
}

//TOURNAMENT MODE
class Tournament {
  constructor(trainers) {
    this.trainers = trainers;
  }

  randomMatchup() {
    const availableTrainers = this.trainers.filter((trainer) =>
      trainer.pokemons.some((pokemon) => !pokemon.isDead())
    );

    if (availableTrainers.length < 2) {
      return; // Not enough trainers for a match
    }

    const trainer1 =
      availableTrainers[Math.floor(Math.random() * availableTrainers.length)];
    let trainer2;
    do {
      trainer2 =
        availableTrainers[Math.floor(Math.random() * availableTrainers.length)];
    } while (trainer1 === trainer2);
    console.log("");
    console.log(`⚔️ Match between ${trainer1.name} and ${trainer2.name} ⚔️`);
    this.startMatch(trainer1, trainer2);
  }

  startMatch(trainer1, trainer2) {
    // Select valid Pokémon that is not dead
    const pokemon1 = trainer1.nextPokemon();
    const pokemon2 = trainer2.nextPokemon();

    if (!pokemon1 || !pokemon2) {
      console.log(
        `Match cannot proceed. One or both trainers have no valid Pokémon.`
      );
      return;
    }

    //RANDOM POKEMON TO RECEIEVED POWER UP
    const powerUpPokemon = Math.random() < 0.5 ? pokemon1 : pokemon2;
    powerUpPokemon.powerUp();
    console.log(
      `🔥 ${powerUpPokemon.name} recieved power up before the battle begins`
    );

    const battle = new Battle(pokemon1, pokemon2);
    battle.startBattle();

    // Remove fainted Pokémon
    trainer1.pokemons = trainer1.pokemons.filter(
      (pokemon) => !pokemon.isDead()
    );
    trainer2.pokemons = trainer2.pokemons.filter(
      (pokemon) => !pokemon.isDead()
    );

    if (trainer1.pokemons.length === 0) {
      console.log(`${trainer1.name} is out of the tournament!`);
    }

    if (trainer2.pokemons.length === 0) {
      console.log(`${trainer2.name} is out of the tournament!`);
    }
  }

  startTournament() {
    while (true) {
      const remainingTrainers = this.trainers.filter((trainer) =>
        trainer.pokemons.some((pokemon) => !pokemon.isDead())
      );

      if (remainingTrainers.length <= 1) {
        if (remainingTrainers.length === 1) {
          console.log(
            ` 👑 The tournament is over! ${remainingTrainers[0].name} is the overall winner!`
          );
        } else {
          console.log(`No winner, all trainers are out of Pokémon.`);
        }
        break;
      }

      this.randomMatchup();
    }
  }
}

//CREATING POKEMON
const charizard = new FirePokemon("Charizard", 10, 100);
const stone = new EarthPokemon("Stone", 10, 100);
const starfish = new WaterPokemon("Starfish", 10, 100);
const birdy = new WindPokemon("Birdy", 10, 100);
const gengar = new DarkPokemon("Gengar", 10, 100);
const charmander = new FirePokemon("Charmander", 10, 100);
const machop = new EarthPokemon("Machop", 10, 100);
const squirtle = new WaterPokemon("Squirtle", 10, 100);
const zubat = new WindPokemon("Zubat", 10, 100);
const mew = new DarkPokemon("Mew", 10, 100);

//CREATING NEW TRAINER ADD ADD POKEMONS IN THEIR TEAM

let randompick = Math.floor(Math.random() * 2); // RANDOMIZE PICK OF POKEMON

const ash = new Trainer("Ash", "Male");
ash.choosePokemon(charizard);
ash.choosePokemon(charmander);
let ashPokemon = ash.selectPokemon(randompick);
ash.showPokemon();
console.log("");

const brok = new Trainer("Brok", "Male");
brok.choosePokemon(stone);
brok.choosePokemon(machop);
let brokPokemon = brok.selectPokemon(randompick);
brok.showPokemon();
console.log("");

const misty = new Trainer("Misty", "Female");
misty.choosePokemon(starfish);
misty.choosePokemon(squirtle);
let mistyPokemon = brok.selectPokemon(randompick);
misty.showPokemon();
console.log("");

const lulu = new Trainer("Lulu", "Female");
lulu.choosePokemon(birdy);
lulu.choosePokemon(zubat);
let luluPokemon = lulu.selectPokemon(randompick);
lulu.showPokemon();
console.log("");

const jiji = new Trainer("Jiji", "Female");
jiji.choosePokemon(gengar);
jiji.choosePokemon(mew);
let jijiPokemon = jiji.selectPokemon(randompick);
jiji.showPokemon();
console.log("");

//BATTLE BEGIN INDIVIDUAL BATTLE
// let battle = new Battle(ashPokemon, brokPokemon);
// battle.startBattle();

// TOURNAMENT SETUP
const trainers = [ash, brok, misty, lulu, jiji];
const tournament = new Tournament(trainers);
tournament.startTournament();
