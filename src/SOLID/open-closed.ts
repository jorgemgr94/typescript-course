/**
 * Fruits can only be added by addFruit method.
 */
class FruitBasket<T> {
  private fruits: T[] = [];
  takeFruit(fruit: T) {
    if (this.fruits.indexOf(fruit) > -1) {
      console.log(`Great success. Now you have a ${fruit}`);
    } else {
      console.log(`Epic fail. No ${fruit} for you.`);
    }
  }

  addFruit(fruit: T) {
    this.fruits.push(fruit);
  }
}

let fruitBasket = new FruitBasket<string>();
fruitBasket.addFruit("kiwi");
fruitBasket.addFruit("pineapple");
fruitBasket.addFruit("apple");

fruitBasket.takeFruit("kiwi");
fruitBasket.takeFruit("lemon");
