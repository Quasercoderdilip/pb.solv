//this is the example of call by reference : 

function modifyObject(obj) {
    obj.age = 30; // Modifies the original object
    console.log("Inside function: obj =", obj);
}
  
let person = { name: "Alice", age: 25 };
modifyObject(person);
  
console.log("Outside function: person =", person); // Original object is modified
  

function modifyObject(arr) {
    arr[1] = 30; // Modifies the original array
    console.log("Inside function: arr =", arr);
}
  
let stdnt = [ "Alice", 22 ];
modifyObject(stdnt);
  
console.log("Outside function: person =", stdnt); // Original array is modified