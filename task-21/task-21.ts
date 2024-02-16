// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// code:

// Interface for a Car
interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
}


let car: Car = {
    brand: "Audi",
    model: "Aa5",
    year: 2023,
    color: "Black"
};

console.log("Car Object",car);