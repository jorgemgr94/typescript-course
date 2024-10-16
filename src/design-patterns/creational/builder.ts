/**
 * Lets you construct complex objects step by step. The pattern allows you to
 * produce different types and representations of an object using the same
 * construction code.
 */

const BREAD_TYPE = {
  WHITE: 'white',
  WHEAT: 'wheat',
  GLUTEN_FREE: 'gluten free',
} as const;
type BreadType = typeof BREAD_TYPE[keyof typeof BREAD_TYPE];

export class HotDog {
  constructor(
    public bread: BreadType,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) { }

  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myLunch = new HotDog(BREAD_TYPE.GLUTEN_FREE)
  .addKetchup()
  .addMustard()
  .addKraut();

console.log(myLunch)
