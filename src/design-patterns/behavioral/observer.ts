/**
 * Lets you define a subscription mechanism to notify multiple objects about any
 * events that happen to the object they're observing.
 */

interface Subject {
  // Attach a device to the thermostat.
  attach(observer: Observer): void;

  // Detach a device from the thermostat.
  detach(observer: Observer): void;

  // Notify all devices about a temperature change.
  notify(): void;
}

/**
* The Thermostat (subject) holds the temperature and notifies devices when it changes.
*/
class ThermostatObservable implements Subject {
  /**
   * @type {number} The current temperature in the house.
   */
  public temperature: number;
  constructor() {
    this.temperature = 20; // Default temperature
  }

  /**
   * @type {Observer[]} List of devices (observers) subscribed to temperature updates.
   */
  private observers: Observer[] = [];

  /**
   * Attach a device to the thermostat.
   */
  public attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return console.log('Thermostat: Device is already connected.');
    }

    console.log('Thermostat: A device has been connected.');
    this.observers.push(observer);
  }

  /**
   * Detach a device from the thermostat.
   */
  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Thermostat: Device not found.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Thermostat: A device has been disconnected.');
  }

  /**
   * Notify all devices about the updated temperature.
   */
  public notify(): void {
    console.log('Thermostat: Notifying devices about the temperature change...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  /**
   * Simulate a temperature change.
   */
  public changeTemperature(): void {
    console.log('\nThermostat: Changing the temperature...');
    this.temperature = Math.floor(Math.random() * 40); // Simulate temperature change between 0 and 40°C

    console.log(`Thermostat: The new temperature is: ${this.temperature}°C`);
    this.notify();
  }
}

/**
* The Observer interface declares the update method for devices to respond to temperature changes.
*/
interface Observer {
  // Receive temperature update from the thermostat.
  update(subject: Subject): void;
}

/**
* The Heater turns on if the temperature drops below 18°C.
*/
class HeaterObserver implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ThermostatObservable && subject.temperature < 18) {
      console.log('Heater: It\'s cold! Turning on the heater.');
    }
  }
}

/**
* The Fan turns on if the temperature exceeds 25°C.
*/
class FanObserver implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ThermostatObservable && subject.temperature > 25) {
      console.log('Fan: It\'s hot! Turning on the fan.');
    }
  }
}

/**
* Client code example.
*/

// Create the thermostat (subject)
const thermostat = new ThermostatObservable();

// Create devices (observers)
const heater = new HeaterObserver();
const fan = new FanObserver();

// Attach devices to the thermostat
thermostat.attach(heater);
thermostat.attach(fan);

// Simulate temperature changes
thermostat.changeTemperature();
thermostat.changeTemperature();

// Detach the fan
thermostat.detach(fan);

// Simulate another temperature change
thermostat.changeTemperature();
