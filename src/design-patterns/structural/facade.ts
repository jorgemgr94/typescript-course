/**
 * Provides a simplified interface to a library, a framework, or any other complex set of classes.
 */
class PlumbingSystem {
  // low level access to plubming system
  setPressure(v: number) {
    console.log(`Setting pressure to ${v}`);
  }
  turnOn() { }
  turnOff() { }
}

class ElectricalSystem {
  // low level access to electrical system
  setVoltage(v: number) {
    console.log(`Setting voltage to ${v}`);
  }
  turnOn() { }
  turnOff() { }
}

// NOTE: this House facade offers a simplified interface to interact with
// the plumbing and electrical systems
export class HouseFacade {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();
  }

}

const house = new HouseFacade();
house.turnOnSystems();
console.log(house)

house.shutDown();
console.log(house)
