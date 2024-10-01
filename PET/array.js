//Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time
// of a train in 24-hour format, find the earliest train to depart.

let train_departures = [10, 15, 7, 25, 5, 24, 4, 0];
let temp = train_departures[0];
for(let i=0; i<train_departures.length ;i++)
{
    if(train_departures[i]<temp)
    {
        temp = train_departures[i];  
    }
   
}
console.log(temp);


//Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat 
// is available, count the total number of available seats.

let seats = [1, 0, 1, 1, 0, 0, 1, 0,];
count = 0;
for(let b=0; b<seats.length; b++){
    if(seats[b]==0){
        count = count + 1;
    }
}
console.log(count);

//Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers

let soldiers = [120, 300, 250, 180, 150];
let temp1 = 0;
for(c=0; c<soldiers.length; c++)
{
    if(soldiers[c]>temp){
        temp1 = soldiers[c];
    }
    
}
 console.log(temp1);

 //Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.

let populations = [50, 60, 70, 80, 90];
let temp2 = 0;
for(d=0; d<populations.length; d++){
    temp2 = populations[d] + temp2
    average = temp2/populations.length;
}
console.log(average)


//Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.

let water_levels = [30, 50, 20, 40, 60];
let e = 1;
let temp3 = water_levels[0];


for(e=0; e<=water_levels.length; e++)
{
    if(water_levels[e]<temp3)
    {
        console.log(water_levels[e]);
    }
}

//Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.

let landing_times = [12, 15, 12, 18, 20, 12];
let count1 = landing_times.length
for(i=0; i<count; i++)
{
    for(j=i+1; j<count1; j++){
        if(landing_times[i]==landing_times[j]){
            console.log(landing_times[i])
        }
    }
}

    

//Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.

let temperatures = [75, 80, 72, 85, 90];

for(g=0; g<=temperatures.length; g++)
{
    if(temperatures[g] > 80)
    {
        console.log(temperatures[g]);
    }
}

//Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.

let students_per_route = [45, 55, 30, 60, 40];
let bus_hold_members = 50;
let sum =0;

for(h=0; h<students_per_route.length; h++)
{
    sum = sum + students_per_route[h];
}
    let Total_bus = sum/bus_hold_members;

 let roundup = Math.ceil(Total_bus)
console.log(roundup);

//Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.

let days_until_festival = [30, 15, 45, 10, 25];
let temp5 = days_until_festival[0];

for(j=0; j<days_until_festival.length; j++)
{
    if(days_until_festival[j] < temp5)
    {
        temp5 = days_until_festival[j];
    }


}
console.log(temp5);

//You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.

let array = [200, 300, 200, 400, 500, 200, 100];

let sum1 = 0;
for(i=0;i<=array.length;i++)
{
    sum1+=i;
}
console.log(sum1);

//You are given an array of student grades. Write a function that calculates the average grade.

let marks = [100, 40, 70, 80];
let sum2 = 0;
let average = 0;

for(i=0; i<marks.length; i++)
{
    sum2 = sum2 + marks[i];
     average = sum/marks.length

}
console.log(average);

//You have an array of people ages. Write a function that filters out people who are 18 years old or older.

let ages = [10, 20, 21, 18, 20]

for(i=0; i<ages.length; i++){
    if(ages[i]>=18){
        console.log(`person of ${[i]} age is greater than 18`);
    }
    else
    {
        console.log(`person of ${[i]} age is lessthan than 18`);
    }
}

//You have an array of integers. Write a function that returns the count of the even numbers in the array.


let even = [20, 31, 40, 51, 60, 80]
let count = 0;
for(i=0; i<even.length; i++){ 
    if(even[i]%2==0){
      count = count + 1;
    }
}
console.log(count);
