//1:

// function name_d(){
//     console.log(name_d.xyz)
// }

// name_d()
// name_d.xyz = 400
// name_d.xyz = 200
// name_d()

//2: event propogation:

// const numbers = [1,2,3,4,5]
// numbers[100] = 500
// console.log(numbers)


//3:

// const arr = [...'praveen']
// console.log(arr)


//4:

// console.log(parseInt('10+2'))
// console.log(parseInt('7FM'))
// console.log(parseInt('M7F'))
 
//5:

// console.log([1,2,3].map(num =>{
//     if (num > 0) return;
//     return num * 2;
// }))


// function fr(){
//     return ;
// }

//console.log(fr())

// 'use strict'
// {
//     function gt(){
//         console.log('xyz')
//     }
// }

// gt()


// function abc(a, b){
//     'use strict';

//     a = 100;
//     b = 200;

//     return arguments[0] + arguments[1];
//     console.log(a + b)
// }

// console.log(abc(400 ,800))

const arr = [1,2,3,4,5,6,7,8]

const ar = arr.find(nums => nums > 4)
console.log(ar)  