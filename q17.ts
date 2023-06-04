/*
    question 17:
     Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
dinner, and you have space for only two guests. 
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner. 
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
a name from your list, print 
a message to that person letting them know you’re sorry you can’t invite them to dinner. 
• Print a message to each of the two people still on your list, letting them know they’re still invited. 
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end 
of your program. 
*/

let guestsList = ["Ali" , "Abdullah", "Asad" ];

console.log ("Invitation List: \n");
console.log ("I would invite", guestsList[0], "to join for dinner tonight");
console.log ("I would invite", guestsList[1], "to join for dinner tonight");
console.log ("I would invite", guestsList[2], "to join for dinner tonight\n");

console.log("You have just found a bigger dinning table, so have more spaces ");

guestsList.unshift("Sherry"); // adding elements in the beginning 
guestsList.splice(2,0, "Faran"); // adding elements in the middle
guestsList.push("Zubair") // adding elements in the last

console.log("Inviting ", guestsList[0]);
console.log("Inviting ", guestsList[1]);
console.log("Inviting ", guestsList[2]);
console.log("Inviting ", guestsList[3]);
console.log("Inviting ", guestsList[4]);
console.log("Inviting ", guestsList[5]);

console.log ("Unfortunately, we are sorry we can only invite two people");

while(guestsList.length > 2)
{
    const guestRemoved = guestsList.pop();  // removing elements
    console.log(`Sorry, ${guestRemoved}, I couldn't invite you for dinner `)
}
for (const guest of guestsList)
{
    console.log (` Dear, ${guest}, you are still invited `);
}

guestsList.length = 0;
console.log ("final guest list" , guestsList);
