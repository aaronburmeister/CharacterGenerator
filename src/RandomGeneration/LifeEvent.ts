import type Trait from "./Trait";

export class possibleOutcome {
  name: string;
  traits: Trait[];
  weight: number;

  constructor(name: string, traits: Trait[], weight: number) {
    this.name = name;
    this.traits = traits;
    this.weight = weight;
  }
}

export default class LifeEvent {
  name: string;
  possibleOutcomes: possibleOutcome[];
  outcome: possibleOutcome;

  constructor(name: string, possibleOutcomes: possibleOutcome[]) {
    this.name = name;
    this.possibleOutcomes = possibleOutcomes;
    this.outcome = this.getOutcome(possibleOutcomes);
  }

  getOutcome(possibleOutcomes: possibleOutcome[]): possibleOutcome {
    const totalOdds = possibleOutcomes.reduce((previousValue, nextValue) => previousValue + nextValue.weight,
      0
    );
    const diceRoll = Math.ceil(Math.random() * totalOdds);
    let remainder = 0;
    for (const possibleOutcome of possibleOutcomes) {
      if (possibleOutcome.weight + remainder >= diceRoll)
        return possibleOutcome;
      else remainder += possibleOutcome.weight;
    }
    throw new Error("No outcome for event" + this.name);
    // roll the dice to see which outcome you get and return that outcome
  }

  reroll(name: string, possibleOutcomes: possibleOutcome[]) {
    this.name = name;
    this.possibleOutcomes = possibleOutcomes;
    this.outcome = this.getOutcome(possibleOutcomes);
  }
}

// Milestone Events = guaranteed to occur at specific breakpoints in your life (i.e. Birth, )
// Random Events = chance to occur every year