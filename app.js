/*
CSCI 390
Tyler Starks
9/6/24
The following program uses a function called "Hello" to check if a name is provided
as command-line argument. If a name is provided process.argv[2] returns "Hello World" using that name. 
*/

/*
 Function to generate Hello World
 Arguments: None
 Returns: String containing the proper greeting
 */
function Hello() {
    const name = process.argv[2];
    if (name) {
        return `Hello ${name}`;
    } else {
        return "Hello World";
    }
}

// Output Hello World
console.log(Hello());
