// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.



// code:


function storeCarInfo(manufacturer: string, model: string, ...options: { [key: string]: string }[]): { manufacturer: string, model: string, options: { [key: string]: string }[] } {
    let carInfo = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };
    return carInfo;
}

const car = storeCarInfo("Audi", "A5", { color: "Black" }, { year: "2023" });

console.log(car);
