/*
39. City Names: Write a function called city_country() that takes in the name 
of a city and its country. The function should return a string formatted like this: 
"Lahore, Pakistan" 
Call your function with at least three city-country pairs, and print the value 
that’s returned. 
*/

let city_country = (city: string , county : string) =>{

    console.log(`"${city},${county}"`);
}

city_country("lahore","pakistan");
city_country("Faisalabad","pakistan");
city_country("Islamabad","pakistan");
