// console.log("test");

//POKEMON
class Pokemon {
  constructor(name, type, level, hp, def) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    // this.atk = atk;
    this.def = def;
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
    let defboost = (this.def = +5);
    this.hp += defboost;
    this.hp += randomhp;
    console.log(
      `${this.name} active unique passive skill and gained [${defboost}] Defense and heal [${randomhp}] HP `
    );
  }

  calculateDamage(opponentType, minDamage, maxDamage) {
    let isSuperEffective = false;
    const counterEffect = {
      Fire: "Earth",
      Earh: "Water",
      Water: "Wind",
      Wind: "Fire",
      Dark: "Light",
    };

    if (counterEffect[this.type] === opponentType) {
      isSuperEffective = true;
    }

    const dmgMultiplier = isSuperEffective ? 0.5 : 0.2;
    const damage = Math.floor(
      this.level *
        (Math.random() * (maxDamage - minDamage) + minDamage) *
        dmgMultiplier
    );

    console.log(
      `${this.name} deals ${damage} ${
        isSuperEffective ? "Critical Damage (Super Effective)" : "Damage"
      } to the Opponent`
    );

    return damage;
  }

  // criticalDamage() {
  //   let damage = this.level * Math.floor(Math.random() * (10 - 7)) + 7; //DEALING CRITCAL HIT ON MASMAHINA
  //   receivedDamage(damage);
  // }

  powerUp() {
    this.hp += 20;
    console.log(`${this.name} use PowerUp +20 HP`);
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
    this.wins = 0;
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

  winCounts() {
    this.wins += 1;
    return console.log(`${this.wins} Wins`);
  }
}

//ADDING SUBCLASS USING POLYMORPSIM AND INHERITANCE

class FirePokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Fire", level, hp);
  }

  attack(opponent) {
    console.log("");
    console.log(`${this.name} use FlameThrower💥 on ${opponent.name}!`);
    let damage = this.calculateDamage(opponent.type, 4, 10); //DEALING CRITCAL HIT ON MASMAHINA
    opponent.receivedDamage(damage);
    if (opponent.type === "Earth") {
      console.log("SUPER EFFECTIVE");
      opponent.heal(); //UNIQUE SKILL HEAL
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
    let damage = this.calculateDamage(opponent.type, 4, 10); //DEALING CRITCAL HIT ON MASMAHINA
    opponent.receivedDamage(damage);
    if (opponent.type === "Water") {
      console.log("SUPER EFFECTIVE");
      opponent.heal(); //UNIQUE SKILL HEAL
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
    let damage = this.calculateDamage(opponent.type, 4, 10); //DEALING CRITCAL HIT ON MASMAHINA
    opponent.receivedDamage(damage);
    if (opponent.type === "Wind") {
      console.log("SUPER EFFECTIVE");
      opponent.heal(); //UNIQUE SKILL HEAL
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
    let damage = this.calculateDamage(opponent.type, 4, 10); //DEALING CRITCAL HIT ON MASMAHINA
    opponent.receivedDamage(damage);
    if (opponent.type === "Fire") {
      console.log("SUPER EFFECTIVE");
      opponent.heal(); //UNIQUE SKILL HEAL
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
    let damage = this.calculateDamage(opponent.type, 4, 10); //DEALING CRITCAL HIT ON MASMAHINA
    opponent.receivedDamage(damage);
    if (opponent.type === "Light") {
      console.log("SUPER EFFECTIVE");
      opponent.heal(); //UNIQUE SKILL HEAL
    }
  }
}

class LightPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Light", level, hp);
  }

  attack(opponent) {
    console.log("");
    console.log(`${this.name} use FlameThrower on ${opponent.name}!`);
    let damage = this.calculateDamage(opponent.type, 4, 10); //DEALING CRITCAL HIT ON MASMAHINA
    opponent.receivedDamage(damage);
    if (opponent.type === "Dark") {
      console.log("SUPER EFFECTIVE");
      opponent.heal(); //UNIQUE SKILL HEAL
    }
  }
}

//BATTLEGROND
class Battle {
  //ADD TRAINER TO RECORD THE WINS
  constructor(pokemon1, pokemon2, trainer1, trainer2) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  startBattle() {
    console.log(
      `The battle Between ${this.pokemon1.name} ❌ ${this.pokemon2.name} has begun! `
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
        this.trainer2.winCounts();
        console.log(
          `${this.pokemon2.name} has level up to ${this.pokemon2.level}`
        );
        console.log("************************************");
      }

      if (this.pokemon2.hp <= 0) {
        console.log(`${this.pokemon1.name} has Win the battle`);
        this.pokemon1.level++;
        this.trainer1.winCounts();
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
    console.log(
      `⚔️ Match between ${trainer1.name} ${trainer1.wins}-Wins 🆚 ${trainer2.name} ${trainer2.wins}-Wins ⚔️`
    );
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

    const battle = new Battle(pokemon1, pokemon2, trainer1, trainer2);
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
            ` 👑 The tournament is over! ${remainingTrainers[0].name}  is the overall winner! and Won ${remainingTrainers[0].wins} Matches`
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
const charizard = new FirePokemon("Charizard", 10, 100, 0);
const stone = new EarthPokemon("Stone", 10, 100, 0);
const starfish = new WaterPokemon("Starfish", 10, 100, 0);
const birdy = new WindPokemon("Birdy", 10, 100, 0);
const gengar = new DarkPokemon("Gengar", 10, 100);
const charmander = new FirePokemon("Charmander", 10, 100, 0);
const machop = new EarthPokemon("Machop", 10, 100, 0);
const squirtle = new WaterPokemon("Squirtle", 10, 100, 0);
const zubat = new WindPokemon("Zubat", 10, 100, 0);
const mew = new DarkPokemon("Mew", 10, 100, 0);
const necrozma = new LightPokemon("Necrozma", 10, 100, 0);
const cosmoem = new LightPokemon("Cosmoem", 10, 100, 0);

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

const carl = new Trainer("Carl", "Male");
carl.choosePokemon(cosmoem);
carl.choosePokemon(necrozma);
let carlPokemon = carl.selectPokemon(randompick);
carl.showPokemon();
console.log("");

//BATTLE BEGIN INDIVIDUAL BATTLE
// let battle = new Battle(ashPokemon, brokPokemon);
// battle.startBattle();

// TOURNAMENT SETUP
const trainers = [ash, brok, misty, lulu, jiji, carl];
const tournament = new Tournament(trainers);
tournament.startTournament();
