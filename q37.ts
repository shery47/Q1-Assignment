/*
    37. Large Shirts: Modify the make_shirt() function so that shirts are large 
by default with a message that reads I love TypeScript. Make a large shirt and a 
medium shirt with the default message, and a shirt of any size with a different 
message. 

*/

let shirt = (size: string = "Large" ,  message : string = "I love Typescript") => {

    console.log("Make a",size, "t-shirt with message:",message)
}
shirt();
shirt("medium"); 
shirt("small")  

// if size is 2nd parameter and message is first then to print default message 
// then we pass parameter like  --> shirt (undefined , medium)
