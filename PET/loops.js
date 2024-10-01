//Fix the issues in this code

calculateArea();
greetUser();
function calculateArea() {
 const radius = 5;
 let area;
 var area1 = Math.PI * radius * radius;//area variabe is used 2 times
 console.log(area1);
}
function greetUser() {
 console.log(userName);
 var userName = "John";
}

//Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?

let count = 1;
while (count < 100) {//change the lessthan symbol and number
 console.log("Counting down: " + count);
 count = count + 1;
}

//Why always It's cold outside. is printed irrespective of the temperature value. Fix this!
if (temperature <=20) {//change the symbol and number
    console.log("It's cold outside.");
   } else {
    console.log("It's warm outside.");
   }

//Fix the issues in the code so that output is printed correctly
checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {//miss the flower brackets and change the symbol
  if (num < 0){
    console.log("Negative");
  }
  else if (num >0) {
    console.log("Positive");
  } 
  else {
    console.log("Zero");
  }
}

//Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.

function sumNumbers(n){
    let sum = 0;
    let i = 1;
    while(i<=n){
        sum = sum+i;
        i++
    }
    return sum;
}
result = sumNumbers(10);
console.log(result);

//Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.

function fact(n){
    let i = 1;
    let temp = 1;
     while(i<=n){
         temp = temp * i;
         i++; 
     }
     console.log(temp);
 }
fact(5);

// Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop

function isEven(n){
    for(i=1; i<=n; i++){
        if(i%2==0){
            console.log(i);
        }
    }
    

}
isEven(20);


//Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.

function sumNumbers(n) {
    let sum = 0;
    let i = 1;  
    while (i <= n) {
      sum += i;
      i++;
    } 
     return sum;
  }
  console.log(sumNumbers(10));

// Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

//If the number is divisible by 3, return "Divisible by 3".
//If the number is divisible by 5, return "Divisible by 5".
//If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
//If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".
function classifyNumber(n){
    if(n%3==0 && n%5==0){
        console.log("the number divisible by both");
    }
    else if(n%3==0){
        console.log("the number divisible by 3");
    }
    else if(n%5==0){
        console.log("the nnumber divisible by 5");   
     }
    else{
        console.log("not divisible by both");
    }
    
    return n;
}

classifyNumber(15);

//. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week.

function getDayName(day){
    switch(day){
        case 1:
            result  = "monday";
            break;
        case 2:
            result = "thusday";
            break;
        case 3:
            result = "wednesday";
            break;
        case 4:
            result = "thursday";
            break;
        case 5:
            result = "friday";
            break;
        case 6:
            result = "saturday";
            break;
        case 7:
            result = "sunday";
        default:
            result = "invalid request";
            break;

    }
    return result;
}
console.log(getDayName(4));


// Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
//For example, if n =5 and r = 6

function printMultiplicationTable(n,r){

    
    for(i=1; i<=6; i++){
        let result = n * r;
        console.log(`${n}*${r}=${result}`);
        r--;
    }

    
    

}
printMultiplicationTable(5,6);

// Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.

let labsCound = 10;
let i =1 ;
while(i<=labsCound)
{
    console.log(`robot complete ${i} times`);
    i++;
}

// A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.

let j = 100;
while(j>20){
    console.log(`battery level is ${j} `);
    j-=5;

    if(j<=20){
      console.log("battery level is low");
    }
}

    
       

// A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.

let direction = "north";

switch(direction)
{
    case "north":
        console.log("the robot move north side");
        break;
    case "south":
        console.log("the robot move south side");
        break;
    case "east":
        console.log("the robot move east side")
        break;
    case "West":
        console.log("the robot move west side");
        break;

    }
//. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.


let flightHeight = 1000;
while(flightHeight>=0)
{
        flightHeight = flightHeight-10;        
}
console.log("the flight is arrived");

// Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.

let destination = "chennai";

switch(destination)
{
    case "chennai":
        console.log("runway 1");
        break;
    case "coimbatore":
        console.log("ranway 2");
        break;
    case "tutucorin":
        console.log("ranway 3");
        break;
    case "madurai":
        console.log("runway 4");
        break;
    case "trichy":
        console.log("ranway 5");
        break;
    default:
        console.log("there is no areroplane in this airport");
        break;
}

//Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.

let intervals = 1;
let altitude = 100;
let count2 = 10;
let flightHeight1 = 1;
for(i=intervals;i<=count2;i++)
{
    flightHeight1 = altitude * intervals;
    console.log(` in first ${i} flight fly in${flightHeight1}feet`);
    intervals++;
    
}




