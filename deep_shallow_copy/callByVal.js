//this is a example for call by value :

function copy(x){
    x.age += 4;
    console.log(`this is copied and changed age : ${x.age}`);
} 

// let num = 6;
// copy(num);

const data = {
    name:'john',
    age:23,
    details:{
        address:'chennai',
        phone:'9176564700',
    }
}

copy(JSON.parse(JSON.stringify(data)));
console.log(`og value of age : ${data.age}`);// Original value remains unchanged
  