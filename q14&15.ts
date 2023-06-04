/*
    question 14 & 15:
    14. If you could invite anyone, living or deceased, to dinner, who would you invite? Make a 
list that includes at least three people you’d like to 
invite to dinner. Then use your list to print a message to each person, inviting them to dinner. 

    15.  Changing Guest List: You just heard that one of your guests can’t make the 
dinner, so you need to send out a new set of invitations. You’ll have to think of 
someone else to invite. 
• Start with your program from Exercise 14. Add a print statement at the 
end of your program stating the name of the guest who can’t make it. 
• Modify your list, replacing the name of the guest who can’t make it with 
the name of the new person you are inviting. 
• Print a second set of invitation messages, one for each person who is still 
in your list. 

*/

let guestList = ["Ali" , "Abdullah", "Asad" ];

console.log ("Invitation List: \n");
console.log ("I would invite", guestList[0], "to join for dinner tonight");
console.log ("I would invite", guestList[1], "to join for dinner tonight");
console.log ("I would invite", guestList[2], "to join for dinner tonight\n");

let absentPer = guestList[1];
let newGuest = "Muneeb";

console.log ("Unfortunately,", absentPer, "isn't coming due to some issue");

guestList[1] = newGuest;

console.log ("Second Invitation List: \n");
console.log ("I will again invite", guestList[0], "to join for dinner tonight");
console.log ("I will again invite", guestList[1], "to join for dinner tonight");
console.log ("I will again invite", guestList[2], "to join for dinner tonight");
