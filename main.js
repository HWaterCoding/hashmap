//main file to run tests
import HashMap from "./hashmap.js";

const hashmap = new HashMap();

//see outputs here::

//hashing function
console.log(hashmap.hash("hello")); //2
// console.log(hashmap.hash("as")); //2
// console.log(hashmap.hash("leloh")); //12
// console.log(hashmap.hash("goodbye")); //12

//setting+appending functions (make sure list works)
console.log(hashmap.set("hello", "world"));
console.log(hashmap.set("as", "world"));
console.log(hashmap.set("hello", "second"));

//getting function

// console.log(hashmap.remove("hello"));
// console.log(hashmap.set("goodbye", "moon"));


console.log(hashmap.print());