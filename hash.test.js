//testing file
import HashMap from "./hashmap.js";

//hashing function
test("hashes a single character", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.hash("a")).toBe(1);
});

test("hashes a string", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.hash("Hello")).toBe(2);
});

test("different output for a string with the same characters", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.hash("olHes")).toBe(9);
});