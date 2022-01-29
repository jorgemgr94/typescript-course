/**
 * Define an interface for creating an object, but let the subclasses decide which class to instantiate.
 * Factory Method lets a class defer instantiation to subclasses.
 */
interface Plane {
  fly(): string;
  land(): string;
}

class AirbusPlane implements Plane {
  constructor(public name: string = "Airbus") {}

  getName() {
    return this.name;
  }

  land(): string {
    return `${this.name} is Landing`;
  }

  fly(): string {
    return `${this.name} is Flying ***`;
  }
}

export class BoeingPlane implements Plane {
  constructor(public name: string = "Boeing") {}

  getName() {
    return this.name;
  }

  land(): string {
    return `${this.name} is Landing`;
  }

  fly(): string {
    return `${this.name} is Flying ***`;
  }
}

// --------------------------------------

export enum PlaneType {
  BOEING = "boeing",
  AIRBUS = "airbus",
}

const PlaneTypeMap: { [name in PlaneType]: Plane } = {
  [PlaneType.BOEING]: new BoeingPlane(),
  [PlaneType.AIRBUS]: new AirbusPlane(),
};

export class PlaneFactory {
  static getPlaneInstance(type: PlaneType): Plane {
    return PlaneTypeMap[type];
  }
}

// const PlaneFactory: { [name in PlaneType]: Plane } = {
//   [PlaneType.BOEING]: new BoeingPlane(),
//   [PlaneType.AIRBUS]: new AirbusPlane(),
// };
// const boeingPlane: Plane = PlaneFactory.[PlaneType.BOEING];

const boeingPlane: Plane = PlaneFactory.getPlaneInstance(PlaneType.BOEING);
console.log(boeingPlane.fly());
