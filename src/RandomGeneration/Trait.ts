import { v4 as uuidv4 } from "uuid";

export default class Trait {
  id!: string;
  name: string;
  odds: number;
  outOf: number;
  level?: string;
  hasLevels?: boolean;
  levels?: Array<object>;
  description?: string;

  constructor(name: string);
  constructor(name: string, odds: number, outOf: number);
  constructor(
    name: string,
    odds: number,
    outOf: number,
    hasLevels: boolean,
    levels: Array<object>
  );
  constructor(
    name: string,
    odds?: number,
    outOf?: number,
    hasLevels?: boolean,
    levels?: Array<object>,
    description?: string
  ) {
    this.id = uuidv4();
    this.name = name;
    this.odds = odds ?? 1;
    this.outOf = outOf ?? 1;
    this.hasLevels = hasLevels;
    this.levels = levels;
    this.description = description;
  }
}
