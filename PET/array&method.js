//Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.

let colours = ["red", "green"];

colours.push("yellow", "blue");
console.log(colours);

//Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, 
//and print the array after each removal.

let fruits = ["apple", "orange", "pineapple", "grapes", "mango"];

fruits.shift();
fruits.shift();
console.log(fruits);

//Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the 
//beginning in a single line and print the array.

let sports = ["cricket", "foodball"];

sports.unshift("chess", "kabadi", "hockey");
console.log(sports);

//Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.

let devices = ["laptop", "mobile", "headphone"];
console.log(devices.indexOf("laptop"));

//Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.

let str = "HTML-CSS-JavaScript"
let spl = str.split("-")
console.log(spl);

//Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a 
//new array in reverse order. Print the reversed array.

let numbers = [2,4,6,8];
let array1 = [];
let array2 = 0;
for(i=numbers.length-1; i>=0; i--){
    array2 = numbers.pop();
    array1.push(array2);
}
console.log(array1);

//Create an array of 4 fruits. Use join() without any separator to combine the array elements into a
//single string and print the result.

let fruits1 = ["apple", "orange", "pineapple", "grapes", "mango"];
let fruits2 = fruits1.join()
console.log(fruits2);


//Write a program to create an object car with properties make, model, and year. Print the model of the car.

let car = {
    model : "BMW",
    year : 2024
}
console.log(car.model);

//Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.


let books = [{title : "The Adventures of Huckleberry Finn",
    author : "Mark Twain"},
  
  {title : "The Adventures of Tom Sawyer",
  author: "Lewis Carroll"}
]
console.log(books[0].title);

//You have an array of 4 objects, each representing a car with properties brand and model. 
//Write a program to add a new property year to each object and assign a value, then print the updated array


cars = [
    { brand: "Tata", model: "Nano" },
    { brand: "Honda", model: "Civic" }
  ]
cars[0].year = 2010;
cars[1].year = 2024;

console.log(cars);

//You have an array of 3 objects, each representing a product with properties name and price. 
//Write a program to calculate and print the total price of all the products in the array.
let products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
]
let sum= 0;

for(i=0; i<products.length; i++){ 
    sum = sum + products[i].price;
}
console.log(sum);

// You have an array of 5 objects, each representing a student with properties name and grade. 
//Write a program to find and print the name of the student whose grade is "A".

let students = [
  { name: "Amar", grade: "A" },
  { name: "Akbar", grade: "B" },
  { name: "Anthony", grade: "A" },
]

for(i=0; i<students.length; i++){
  if(students[i].grade == "A"){
    console.log(students[i].name)
  }
}