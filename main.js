import HashMap from "./hashmap.js";

const hashmap = new HashMap();

//see outputs here::

//hash() function
// console.log(hashmap.hash("hello")); //2
// console.log(hashmap.hash("as")); //2
// console.log(hashmap.hash("leloh")); //12
// console.log(hashmap.hash("goodbye")); //12

//set() function
//initial bucket population
hashmap.set('apple', 'red');
hashmap.set('banana', 'yellow');
hashmap.set('carrot', 'orange');
hashmap.set('dog', 'brown');
hashmap.set('elephant', 'gray');
hashmap.set('frog', 'green');
hashmap.set('grape', 'purple');
hashmap.set('hat', 'black');
hashmap.set('ice cream', 'white');
hashmap.set('jacket', 'blue');
hashmap.set('kite', 'pink');
hashmap.set('lion', 'golden');

//overwriting values
hashmap.set('banana', 'brown');
hashmap.set('dog', 'husky');
hashmap.set('kite', 'dead');

//exceed load factor (SHOULD DOUBLE CAPACITY)
hashmap.set('moon', 'silver')

//second overwriting values
hashmap.set('banana', 'green');
hashmap.set('dog', 'dalmatian');
hashmap.set('kite', 'beheaded');


//get() function
console.log(hashmap.get("dog")); //dalmatian

//has() function
console.log(hashmap.has("dog")); //true
console.log(hashmap.has("cat")); //false


//remove() function
hashmap.remove("dog");

//length() function
console.log(hashmap.length()); 

//clear() function
// hashmap.clear();

//keys() function
console.log(hashmap.keys());

//values() function
console.log(hashmap.values());

// entries() function
console.log(hashmap.entries());



//Print the entire map
console.log(hashmap.print());