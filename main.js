//main file to run tests
import HashMap from "./hashmap.js";

const hashmap = new HashMap();

//hashing function
console.log(hashmap.hash("hello")); //2
console.log(hashmap.hash("as")); //2
console.log(hashmap.hash("leloh")); //12

//setting+appending functions (make sure list works)
console.log(hashmap.set("hello", "world"));
console.log(hashmap.set("as", "second"));

//getting function