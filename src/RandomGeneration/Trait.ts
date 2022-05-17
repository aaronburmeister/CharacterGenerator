export default class Trait {
    name: String
    odds: Number
    outOf: Number
    hasLevels: Boolean
    levels: Object = {}
    description: String

    constructor(name: String, 
        odds: Number, 
        outOf: Number, 
        hasLevels: Boolean, 
        levels: Object, 
        description: String) 
    {
        this.name = name
        this.odds = odds
        this.outOf = outOf
        this.hasLevels = hasLevels
        if (hasLevels) this.levels = levels // e.g. type 1, type 2 diabetes
        this.description = description
    }
}