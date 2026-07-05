//testing file
import HashMap from "./hashmap.js";


//hashing function:
test.skip("hashes a single character", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.hash("a")).toBe(1);
});

test.skip("hashes a string", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.hash("Hello")).toBe(2);
});

test.skip("different output for a string with the same characters", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.hash("olHes")).toBe(9);
});



//set()
test.skip("creates a new node", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    const bucket = hashmap.buckets[hashmap.hash("hello")];

    expect(bucket.head.key).toBe("hello");
    expect(bucket.head.value).toBe("world");
});
test.skip("update an existing nodes value", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("hello", "aliens");

    const bucket = hashmap.buckets[hashmap.hash("hello")];

    expect(bucket.head.key).toBe("hello");
    expect(bucket.head.value).toBe("aliens");
});
test.skip("adding new key increases size", () => {
    const hashmap = new HashMap();

    hashmap.set("hello", "world");

    expect(hashmap.size).toBe(1);
});
test.skip("updating a value does NOT increase the size", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("hello", "aliens");

    expect(hashmap.size).toBe(1);
});
test.skip("handles collision properly", ()=>{
    const hashmap = new HashMap();

    hashmap.set("hello", "world");
    hashmap.set("as", "second");

    expect(hashmap.hash("hello")).toBe(hashmap.hash("as"));

    const bucket = hashmap.buckets[hashmap.hash("hello")];

    expect(bucket.head.key).toBe("hello");
    expect(bucket.head.value).toBe("world");

    expect(bucket.head.next.key).toBe("as");
    expect(bucket.head.next.value).toBe("second");
});



//get()
test.skip("get() returns correct value", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    expect(hashmap.get("hello")).toBe("world");
});
test.skip("returns an updated value", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("hello", "aliens");
    expect(hashmap.get("hello")).toBe("aliens");
});
test.skip("returns null if key doesn't exist", ()=>{
    const hashmap = new HashMap();
    hashmap.set("goodbye", "world");
    expect(hashmap.get("hello")).toBe(null);
});




//has()
test.skip("If bucket empty, return false", ()=>{
    const hashmap = new HashMap();

    expect(hashmap.has("hello")).toBe(false);
});
test.skip("If key doesnt exist, return false", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    expect(hashmap.has("goodbye")).toBe(false);
});
test.skip("If key exists, return true", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    expect(hashmap.has("hello")).toBe(true);
});
test.skip("Finds a key in a collision chain", () => {
    const hashmap = new HashMap();

    hashmap.set("hello", "world");
    hashmap.set("as", "second");

    expect(hashmap.has("hello")).toBe(true);
    expect(hashmap.has("as")).toBe(true);
});



//remove()
test.skip("successfully removes a node", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    expect(hashmap.remove("hello")).toBe(true);
});
test.skip("returns false if no node", ()=>{
    const hashmap = new HashMap();
    expect(hashmap.remove("hello")).toBe(false);
});
test.skip("doesnt remove after already removed", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");

    expect(hashmap.remove("hello")).toBe(true);
    expect(hashmap.remove("hello")).toBe(false);
});
test.skip("updates size variable correctly", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.remove("hello");

    expect(hashmap.size).toBe(0);
});



//length()
test.skip("track a single appended value correctly", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    expect(hashmap.length()).toBe(1);
});
test.skip("track multiple appended values correctly", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("goodbye", "world");
    expect(hashmap.length()).toBe(2);
});
test.skip("size doesn't increase on a rewritten key:value", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("hello", "aliens");
    expect(hashmap.length()).toBe(1);
});
test.skip("size properly decreases when key:value is removed", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("goodbye", "world");
    hashmap.remove("hello");
    expect(hashmap.length()).toBe(1);
});



//clear()
test("Clear a single node at once", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.clear();
    expect(hashmap.length()).toBe(0);
});
test("Clear multiple nodes at once", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("goodbye", "world");
    hashmap.clear();
    expect(hashmap.length()).toBe(0);
});