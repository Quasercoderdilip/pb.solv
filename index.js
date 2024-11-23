function toreversestr(word){
    let reversedstr = '';
    for(i = word.length - 1; i >= 0 ; i--){
        reversedstr += word[i]
    }
    return reversedstr;
}

let ner = 'qualification';

let rev = toreversestr(ner);
console.log(rev)


function sumofodd(num){
    let numbs = 0;
    for(i=1 ; i <= num ; i+=2){
        numbs += i;
    }
    return numbs
}

console.log(sumofodd(5))


function tofindprime(n) {
    const primenum = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primenum.push(i);
      }
    }
    return primenum;
}

console.log(tofindprime(10));



function fzbz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
}

console.log(fzbz())




function findDupli(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
}
  
let sd = ['apple','orange','banana','apple','pomegranate','orange']
console.log(findDupli(sd))



//to find even and odd numbers : 

const nums = [1,2,3,4,5,6,7,8,9,10]

const even_nums = nums.filter(itm => itm % 2 === 0)
const odd_nums = nums.filter(itm => itm % 2 !== 0)

console.log(even_nums);
console.log(odd_nums);


//lets print the tables : 

function tables_printer(){
  let table = '';

  for(o = 1; o <= 10; o++){
    for(t = 1; t <= 10; t++){
      table += `${o} x ${t} = ${o*t} ${"\n"}`
    }
    table += "\n";
  }

  console.log(table);
}

tables_printer();


//to convert the length : 

function conv_kmtomtrs(jk){
  const meters = jk * 1000;
  return meters;
}
let km = 6.5;

console.log(`${km}km is equal to ${conv_kmtomtrs(km)} meters`)


function conv_mtrsTokm(jk){
  const km = jk / 1000;
  return km;
}

let meters = 20500;
console.log(`${meters}mtrs is equal to ${conv_mtrsTokm(meters)}kms`)




//patterns : 


let f = '*';


function patt(x,r,c){
    let str ='';

    if(x === typeof(String)){
        for (let i = 0; i <= r; i++) {
            str +=  x . repeat(c) + '\n';
        }
        return str;
    }
}

console.log(patt(f,5,5));


let d = '*';

function patt(x, r, c) {
    let str = '';

    // Correct typeof check and loop condition
    if (typeof x === 'string') {
        for (let i = 1; i <= r; i++) {
           c = c - 1;
           for(let u = 1; u <= c; u++ ){
            
            str += x;
           }str += '\n';
        }
        return str;
       
    } else {
        return 'Input is not a string';
    }
}

console.log(patt(d, 10, 10));



//Calculate the sum of numbers within an array : 

let arr_1 = [1,2,3,4,-5];
let arr_2 = [6,7,8,9,10];

const sumofarr = (arr) => {

    return arr.reduce((acc,num) => acc + num, 0)
    
}

console.log(`sum of array_1 :${sumofarr(arr_1)}`);
console.log(`sum of array_2 :${sumofarr(arr_2)}`);


//to find sum of numbers : 

function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i; // Add each number from 1 to N to the sum
    }
    return sum;
}

// Testing the function with N = 5
const N = 10;
console.log(`Sum of numbers from 1 to ${N}: ${sumOfNumbers(N)}`);

//Print First N Even Numbers* : 

const printevenNums = (need) => {  
    let even_nums = []; 
    for (i = 1; i <= need; i++) {
        even_nums.push(i * 2);
    }
    return even_nums;
};

const numbers = 5;

console.log(`Even nums for count of ${numbers} is : ${printevenNums(numbers)}`)



///to reverse an array :

let orgin_arr = ['saitama','goku','naruto','hinata']


const rev_Arr = (x) => {
  let lastindex = x.length - 1;
  for(let i = lastindex; i>=0; i--) {
    console.log(x[i])
  }
}

rev_Arr(orgin_arr);



// //to find factorial of a number : 

const find_factorial = (x) => {
  if (x === 0 || x === 1) {
    return 1; // Base case
  } else {
    return x * find_factorial(x - 1); // Recursive case
  }
};

console.log(find_factorial(4)); // Output: 24
console.log(find_factorial(5)); // Output: 120
