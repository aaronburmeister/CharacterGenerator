import type Trait from "./Trait";

export default class RandomCharacter {
  name: string;
  traits: Array<Trait>;

  constructor(name: string, possibleTraits?: Trait[]);
  constructor(name: string, possibleTraits: Trait[]) {
    this.name = name;
    this.traits = [];
    if (possibleTraits) possibleTraits.forEach((trait) => this.hasTrait(trait));
  }

  hasTrait(trait: Trait) {
    const chance = Math.ceil(Math.random() * trait.outOf);
    const hasTrait = chance <= trait.odds ? true : false;
    // console.log(this.name, "has", trait.name + "?", hasTrait)
    if (hasTrait) {
      if (trait.hasLevels) {
        // diabetes
        // Type I and Type II
        // Type I ~ 5%, Type II ~ 95%
        // [
        //     {
        //         name: "Type I Diabetes",
        //         odds: 5
        //     },
        //     {
        //         name: "Type II Diabetes",
        //         odds: 95
        //     }
        // ]
        const level = this.hasLevel(trait.levels || []);
        trait.level = level.name;
      }
      this.traits.push(trait);
      return true;
    }
    return false;
  }

  hasLevel(levels: Array<any>) {
    let sum = 0;

    for (const level in levels) {
      sum += levels[level].odds;
    }

    const rand = Math.random();
    let chance = 0;
    for (const i in levels) {
      chance += levels[i].odds / sum;
      if (rand < chance) {
        return levels[i];
      }
    }

    // should never be reached unless sum of probabilities is less than 1
    // due to all being zero or some being negative probabilities
    return -1;
  }

  reroll(name: string, possibleTraits: Trait[]) {
    this.name = name;
    this.traits = [];
    if (possibleTraits) possibleTraits.forEach((trait) => this.hasTrait(trait));
  }
}
