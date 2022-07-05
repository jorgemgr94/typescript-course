class SingletonPet {
  constructor(private type: string, private name: string) {
    this.type = type;
    this.name = name;
  }

  setName(name: string) {
    this.name = name;
  }

  showAll() {
    console.log(this.name, this.type);
  }
}

export default new SingletonPet("dog", "Maky");
