import type Trait from "./Trait"

export default class RandomCharacter {
    name: String
    traits: Array<Trait>

    constructor(name: String) {
    // Random Stats
    this.name = name
    this.traits = []
    }

    hasTrait(trait: Trait) {
        const chance = Math.ceil(Math.random() * trait.outOf.valueOf())
        const hasTrait = chance <= trait.odds.valueOf() ? true : false
        console.log(this.name, "has", trait.name + "?", hasTrait)
        if (hasTrait) {
            if (trait.hasLevels) {
                // do something with levels
            }
            this.traits.push(trait)
            return true
        }
        return false
    }
}