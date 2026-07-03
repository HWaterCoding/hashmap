//testing file
import HashMap from "./hashmap.js";

//hashing function:
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



//set method:
test.skip("test 1", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.set("key", "value")).toBe();
});



//get method:
test.skip("test 1", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.get("", "")).toBe();
});



//has method:
test.skip("test 1", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.has("", "")).toBe();
});