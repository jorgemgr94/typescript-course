type Dog = { legs: 4 };
type Bear = { legs: 4 };
type Bird = { legs: 2 };

type Animals = Bird | Dog | Bear;

type HasFourLegs<Animal> = Animal extends { legs: 4 } ? Animal : never;
type FourLegs = HasFourLegs<Animals>;

export {};
