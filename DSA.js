//DSA in js : 



// 1_Arrays : 

//const Elements = ['English', 'Tamil', 'Hindi', 'Telugu'];


//Accesing array elements : 
// console.log(Elements[0]);
// console.log(Elements[1]);
// console.log(Elements[2]);


//Updating array elements : 
//Elements[0] = 'German';
// console.log(Elements);


//Find the number of elements : 
// console.log(Elements.length);

//so we can add items to an array like this : 
// Elements.push( function Amin(){ 
//     console.log('hi iam a function and in inside an array, its funny to hear right...😁');
// });

// let fg = Elements[4];

// fg();

//for add in the begining :
//Elements.unshift('Malayalam');
// console.log(Elements);



//Removing items fom array : 

// Elements.pop();//pop removes at the end.
// console.log(Elements);

// Elements.shift();//shift removes at the begining.
// console.log(Elements);


//Algorithms : 

//Traversing => 

//let NewArray = [];

// for(i = 0; i < Elements.length; i++){
//     NewArray.push(Elements[i]);
// }

// console.log(NewArray);


//Inserting : 

//Elements.splice(1,0,'Gujarathi');//adding item at the specified position.
//console.log(Elements);


//Deleting array : 

// Elements.splice(0,1);
// console.log(Elements);




//LinkedList => 

// Linked lists are another way to store and manage collections of data.
// Unlike arrays, linked lists are not stored in contiguous memory locations.
// Instead, each element (called a note) points to the next element in the list.


//singly linked list : 


//create a node :
// class Node{
//     constructor(data){
//         this.data = data;//value stored in the node.
//         this.next = null;//pointer to the next node.
//     }
// }


// //linked list => 
// class LinkedList{
//     constructor(){
//         this.head = null;
//     }


//     //add a new node at the end of the list :
//     append(data){
//         const NewNode = new Node(data);

//         if(!this.head){
//             this.head = NewNode;
//             return;
//         }

//         let current = this.head;
//         while(current.next){
//             current = current.next;
//         }
//         current.next = NewNode;
//     }

//     //display the list :
//     dislplay(){
//         let current = this.head;

//         while(current){

//             console.log(current.data);
            
//             current = current.next;
//         }
//     }
// }


// //usage : 

// let list = new LinkedList();

// list.append(5);
// list.append(10);
// list.append(15);
// list.append(20);
// list.append(25);
// list.append(30);

// list.dislplay();




// Stack : 

class Stack {//class can reusable of stack data structure.

    constructor(){
        this.items = [];
    }

    push(element){//push operation add an element to the top.
        this.items.push(element);
    }

    pop(){//pop operation remove an element from the top.
        return this.isEmpty() ? 'Stack is Empty' : this.items.pop();
    }

    peak(){//to view the top element of stack.
        return this.isEmpty() ? 'Stack is Empty' : this.items[this.items.length - 1];
    }

    isEmpty(){//check if stack is empty or not.
        return this.items.length === 0;
    }

    size(){//get the size of stack.
        return this.items.length;
    }

    clear(){//to clear the stack.
        this.items = [];
    }
}



//lets create a array using a stack data structure.
let new_stack = new Stack();

let anime_Collection = ['Pokemon','Dragon Ballz','Death note','Solo levelling','Naruto','Jijutsu kaisen','One punch man']

for(let i=0; i < anime_Collection.length; i++){
    new_stack.push(anime_Collection[i]);
}

// new_stack.push('DSP');

// console.log(new_stack.peak());

// console.log(new_stack.isEmpty());

// console.log(new_stack.size());

// console.log(new_stack);

// console.log(new_stack.pop());

for(let i = new_stack.items.length - 1; i >= 0; i--){
    console.log( 'My one of fav animes' + new_stack.items[i]);
}




