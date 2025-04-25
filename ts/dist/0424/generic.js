"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Factory {
    products;
    constructor(product) {
        this.products = [product];
    }
    create(product) {
        this.products.push(product);
    }
    getProducts() {
        return [...this.products];
    }
}
class CoffeeFactory extends Factory {
    order(menu, toppings) {
        const coffee = this.products.find(({ menu: _coffee }) => _coffee === menu);
        return coffee ? { ...coffee, additives: toppings } : null;
    }
}
const coffeeFactory = new CoffeeFactory({
    menu: "americano",
    price: 2000,
});
const myCoffee = coffeeFactory.order("americano", [
    { syrup: "choco", price: 500 },
    "java",
    "cherry",
]);
const myAdditionalPrice = myCoffee?.additives.reduce((sum, item) => (sum += typeof item === "string" ? 0 : item.price), 0); // OK? Error?
const yourCoffee = coffeeFactory.order("americano", [
    { syrup: "choco", price: 500 },
    { syrup: "strawberry", price: 800 },
]);
const yourAdditionalPrice = yourCoffee?.additives.reduce((s, c) => (s += c.price), 0); // OK? Error? OK!
class BothLogger {
    instanceLog(value) {
        console.log("instanceLog.value > ", value);
        return value;
    }
    static A;
    static staticLog(value) {
        let instanceLogValue;
        console.log("staticLog.value > ", value);
        return value;
    }
}
const logger = new BothLogger();
const value = logger.instanceLog([1, 2, 3]); // number[]
// logger.instanceLog(['A', 'B', 'C']); // arguments must be number[]
const logger2 = new BothLogger();
const value2 = logger2.instanceLog("Hello"); // unknown
BothLogger.staticLog(["a", "b", "c"]);
BothLogger.staticLog([true, false, false]);
const post = {
    id: 10,
    title: "post",
    content: "content",
    user: { id: 1, age: 33, name: "hong" },
};
function get(container, key) {
    return container[key];
}
const user = get(post, "user");
const xo2 = { id: 1, name: "Hong" };
