//this is the example of call by reference : 

function modifyObject(arr) {
    arr[1] = 30; // Modifies the original object
    console.log("Inside function: arr =", arr);
}
  
let person = [ "Alice", 25 ];
modifyObject(person);
  
console.log("Outside function: person =", person); // Original object is modified
  