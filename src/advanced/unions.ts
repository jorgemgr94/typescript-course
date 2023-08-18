interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse; // union type.

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

const animal: Animal = {
  type: "horse",
  runningSpeed: 10,
};

moveAnimal({ type: "bird", flyingSpeed: 10 });

// == Templates =============================================
type SupportedLangs = "en" | "es";
type FooterLocaleIDs = "header" | "footer";

type AllLocaleIDs = `${SupportedLangs}_${FooterLocaleIDs}`;

export {};
