// Ans : 1
// Create an empty object user.
// let user = {};

// Add the property name with the value John.
// user.name = "John";

// Add the property surname with the value Smith.
// user.surname = "Smith";

// Change the value of the name to Pete.
// user.name = "Pete";

// Remove the property name from the object.
// delete user.name;


// Ans : 2
// let fruits = ["Apples", "Pear", "Orange"];
// let shoppingCart = fruits; shoppingCart.push("Banana");
// console.log(fruits);


// Ans : 3
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map(user => user.name);

// console.log(names); // John, Pete, Mary



// Ans : 4
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(user => ({ fullName: `${user.name} ${user.surname}`, id: user.id }));

// console.log(usersMapped[0].id); // Output: 1
// console.log(usersMapped[0].fullName); // Output: John Smith



// Ans : 5
// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//     return sum;
// }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// console.log(sumSalaries(salaries)); // Output: 650



// Ans : 6
// let user = { name: "John", years: 30 };

// let { name, years: age, isAdmin = false } = user;

// console.log(name); // Output: John
// console.log(age); // Output: 30
// console.log(isAdmin); // Output: false