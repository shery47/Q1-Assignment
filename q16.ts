/*
    questio 16:
    More Guests: You just found a bigger dinner table, so now more space is 
available. Think of three more guests to invite to dinner. 
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a 
bigger dinner table. 
• Add one new guest to the beginning of your array. 
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. 
*/

let guest = ["Ali" , "Abdullah", "Asad" ];

console.log ("Invitation List: \n");
console.log ("I would invite", guest[0], "to join for dinner tonight");
console.log ("I would invite", guest[1], "to join for dinner tonight");
console.log ("I would invite", guest[2], "to join for dinner tonight\n");

console.log("You have just found a bigger dinning table, so have more spaces ");

guest.unshift("Sherry"); // adding elements in the beginning 
guest.splice(2,0, "Faran"); // adding elements in the middle
guest.push("Zubair") // adding elements in the last

console.log("Inviting ", guest[0]);
console.log("Inviting ", guest[1]);
console.log("Inviting ", guest[2]);
console.log("Inviting ", guest[3]);
console.log("Inviting ", guest[4]);
console.log("Inviting ", guest[5]);
