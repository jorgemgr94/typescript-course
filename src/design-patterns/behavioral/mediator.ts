/**
 * Lets you reduce chaotic dependencies between objects. The pattern
 * restricts direct communications between the objects and forces
 * them to collaborate only via a mediator object.
 */
interface Mediator {
  notify(sender: object, event: string): void;
}

/**
* Concrete Mediator implements cooperative behavior by coordinating multiple
* components (smart devices).
*/
class SmartHomeMediator implements Mediator {
  private light: SmartLight;
  private door: SmartDoor;
  private alarm: SmartAlarm;

  constructor(light: SmartLight, door: SmartDoor, alarm: SmartAlarm) {
    this.light = light;
    this.light.setMediator(this);
    this.door = door;
    this.door.setMediator(this);
    this.alarm = alarm;
    this.alarm.setMediator(this);
  }

  public notify(sender: SmartHomeComponent, event: string): void {
    if (event === 'doorOpened') {
      console.log('Mediator reacts to door opening and triggers following operations:');
      this.light.turnOn();
      this.alarm.deactivate();
    }

    if (sender instanceof SmartAlarm && event === 'alarmTriggered') {
      console.log('Mediator reacts to alarm triggering and locks the door:');
      this.door.lock();
    }
  }
}

/**
* BaseComponent provides the basic functionality for storing a mediator's instance.
*/
class SmartHomeComponent {
  protected mediator: Mediator;

  constructor(mediator?: Mediator) {
    this.mediator = mediator!;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

/**
* Concrete Components represent different smart devices in the home.
* They notify the mediator about events.
*/
class SmartLight extends SmartHomeComponent {
  public turnOn(): void {
    console.log('Smart Light: Light is turned ON.');
  }

  public turnOff(): void {
    console.log('Smart Light: Light is turned OFF.');
  }
}

class SmartDoor extends SmartHomeComponent {
  public open(): void {
    console.log('Smart Door: Door is opened.');
    this.mediator.notify(this, 'doorOpened');
  }

  public lock(): void {
    console.log('Smart Door: Door is locked.');
  }

  public unlock(): void {
    console.log('Smart Door: Door is unlocked.');
  }
}

class SmartAlarm extends SmartHomeComponent {
  public trigger(): void {
    console.log('Smart Alarm: Alarm is triggered!');
    this.mediator.notify(this, 'alarmTriggered');
  }

  public deactivate(): void {
    console.log('Smart Alarm: Alarm is deactivated.');
  }
}

/**
* Client code.
*/
const light = new SmartLight();
const door = new SmartDoor();
const alarm = new SmartAlarm();

// Create the mediator, passing the components/devices
const mediator = new SmartHomeMediator(light, door, alarm);

// Simulate events in the smart home
console.log('Client opens the door.');
door.open();

console.log('Client triggers the alarm.');
alarm.trigger();
