/**
 * Lets you construct complex objects step by step. The pattern allows you to
 * produce different types and representations of an object using the same
 * construction code.
 *
 * NOTE: this example uses a Director class, which is optional. Also this example
 * doesn't use the chainable methods.
 */
interface HouseBuilder {
  // basic
  buildWalls(): void;
  buildDoors(): void;
  buildWindows(): void;
  buildRoof(): void;

  // intermediate
  buildGarage(): void;

  // full featured
  buildSwimmingPool(): void;
}

class House {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}


class ConcreteHouseBuilder implements HouseBuilder {
  private house: House;

  /**
   * A fresh builder instance should contain a blank product object, which is
   * used in further assembly.
   */
  constructor() {
    this.house = new House();
  }


  public reset(): void {
    this.house = new House();
  }

  buildWalls() {
    this.house.parts.push('Concrete walls');
  }
  buildDoors() {
    this.house.parts.push('Concrete doors');
  }
  buildWindows() {
    this.house.parts.push('Concrete windows');
  }
  buildRoof() {
    this.house.parts.push('Concrete roof');
  }
  buildGarage() {
    this.house.parts.push('Concrete garage');
  }
  buildSwimmingPool() {
    this.house.parts.push('Concrete swimming pool');
  }


  public getInstance(): House {
    const result = this.house;
    this.reset();
    return result;
  }
}

/**
 * The Director is only responsible for executing the building steps in a
 * particular sequence. It is helpful when producing products according to a
 * specific order or configuration. Strictly speaking, the Director class is
 * optional, since the client can control builders directly.
 */
class HouseBuilderDirector {
  private builder: HouseBuilder;

  constructor(builder: HouseBuilder) {
    this.builder = builder;
  }

  /**
   * The Director works with any builder instance that the client code passes
   * to it. This way, the client code may alter the final type of the newly
   * assembled product.
   */
  public setBuilder(builder: HouseBuilder): void {
    this.builder = builder;
  }

  /**
   * The Director can construct several product variations using the same
   * building steps.
   */

  public buildBasicHouse(): void {
    this.builder.buildDoors();
    this.builder.buildWindows();
    this.builder.buildRoof();
  }

  public buildIntermediateHouse(): void {
    this.buildBasicHouse();
    this.builder.buildGarage();
  }

  public buildFullFeaturedHouse(): void {
    this.buildIntermediateHouse();
    this.builder.buildSwimmingPool();
  }
}


const builder = new ConcreteHouseBuilder();
const director = new HouseBuilderDirector(builder);

console.log('Basic house:');
director.buildBasicHouse();
builder.getInstance().listParts();

console.log('Full featured house:');
director.buildFullFeaturedHouse();
builder.getInstance().listParts();

// NOTE: Builder pattern can be used without a Director class.
console.log('Custom house:');
builder.buildDoors();
builder.buildSwimmingPool();
builder.getInstance().listParts();
