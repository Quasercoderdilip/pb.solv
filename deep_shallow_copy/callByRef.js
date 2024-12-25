//this is the example of call by reference : 

function modifyObject(obj) {
    obj.age = 30; // Modifies the original object
    console.log("Inside function: obj =", obj);
}
  
let person = { name: "Alice", age: 25 };
modifyObject(person);
  
console.log("Outside function: person =", person); // Original object is modified
  