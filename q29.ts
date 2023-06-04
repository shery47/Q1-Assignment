/*
    29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
statements that check for certain fruits in your array. 
• Make a array of your three favorite fruits and call it favorite_fruits. 
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
in your array, the if block should print a statement, 
such as You really like bananas! 
*/

let fav_fruit = ['banana', 'apple', 'strawberry'];

if (fav_fruit.includes('kiwi'))
{
    console.log("You really like kiwi");
}
else if (fav_fruit.includes('banana'))
{
    console.log("You really like bananas!");
}
else if (fav_fruit.includes('apple'))
{
    console.log("You really like apple!");
}
else if (fav_fruit.includes('strawberry'))
{
    console.log("You really like strawberry!");
}
else if (fav_fruit.includes('mango'))
{
    console.log("You really like mango");
}

