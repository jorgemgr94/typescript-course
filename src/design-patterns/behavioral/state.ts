/**
 * Lets an object alter its behavior when its internal state changes.
 * It appears as if the object changed its class.
 */

class TrafficLight {
  private state: TrafficLightState;

  constructor(state: TrafficLightState) {
    this.state = state; // Start with an initial state
    this.state.setTrafficLight(this);  // Link the traffic light to the state
  }

  // Method to change the traffic light state
  public transitionTo(state: TrafficLightState): void {
    console.log(`TrafficLight: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setTrafficLight(this);  // Link the traffic light to the state
  }

  // Methods that trigger behavior based on the current state
  public requestChange(): void {
    this.state.handle();
  }
}

// Abstract base State class
abstract class TrafficLightState {
  protected trafficLight!: TrafficLight;

  public setTrafficLight(trafficLight: TrafficLight): void {
    this.trafficLight = trafficLight;
  }

  // Abstract method to be implemented by concrete states
  public abstract handle(): void;
}

// Concrete State for Green
class GreenLight extends TrafficLightState {
  public handle(): void {
    console.log('GreenLight: Cars can go!');
    // Transition to Yellow after Green
    this.trafficLight.transitionTo(new YellowLight());
  }
}

// Concrete State for Yellow
class YellowLight extends TrafficLightState {
  public handle(): void {
    console.log('YellowLight: Cars should slow down.');
    // Transition to Red after Yellow
    this.trafficLight.transitionTo(new RedLight());
  }
}

// Concrete State for Red
class RedLight extends TrafficLightState {
  public handle(): void {
    console.log('RedLight: Cars must stop!');
    // Transition to Green after Red
    this.trafficLight.transitionTo(new GreenLight());
  }
}

// Client code
const trafficLight = new TrafficLight(new GreenLight());  // Start with green

// Simulate the traffic light changing
trafficLight.requestChange();  // Transition from Green to Yellow
trafficLight.requestChange();  // Transition from Yellow to Red
trafficLight.requestChange();  // Transition from Red to Green
trafficLight.requestChange();  // Transition from Red to Green
trafficLight.requestChange();  // Transition from Red to Green
trafficLight.requestChange();  // Transition from Red to Green
trafficLight.requestChange();  // Transition from Red to Green
