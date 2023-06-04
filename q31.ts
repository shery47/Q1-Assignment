/*
31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. 
• If the list is empty, print the message We need to find some users! 
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let a = [1,2,3,4]

console.log("lenght of array is:" ,a.length);


a = [];
console.log("now the length of arr is:",a.length)

if(a.length == 0)
{
    console.log("as list is empty so we need to find more users")
}
else
{
    console.log("list have some users")
}
