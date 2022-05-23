export default class Trait {
    name: string
    odds: number
    outOf: number
    level?: string
    hasLevels?: boolean
    levels?: Array<object>
    description?: string

    constructor(name: string)
    constructor(name: string, odds: number, outOf: number)
    constructor(name: string, odds: number, outOf: number, hasLevels: boolean, levels: Array<object>)
    constructor(name: string, odds?: number, outOf?: number, hasLevels?: boolean, levels?: Array<object>, description?: string) {
        this.name = name
        this.odds = odds ?? 1
        this.outOf = outOf ?? 4
        this.hasLevels = hasLevels
        this.levels = levels
        this.description = description
    }
}