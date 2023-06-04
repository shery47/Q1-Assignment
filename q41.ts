/*
41. Magicians: Make a array of magician’s names. Pass the array to a function 
called show_magicians(), which prints the name of each magician in the array. 
*/

const magicians_name : string[] = ["harry", "Imad", "David"];

let show_magicians = (magicians_name : string[]) =>{
    for(const magician of magicians_name){
        console.log(magician);
    }
} 

show_magicians(magicians_name);

