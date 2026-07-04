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
test("creates a new node", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    const bucket = hashmap.buckets[hashmap.hash("hello")];

    expect(bucket.head.key).toBe("hello");
    expect(bucket.head.value).toBe("world");
});
test("update an existing nodes value", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("hello", "aliens");

    const bucket = hashmap.buckets[hashmap.hash("hello")];

    expect(bucket.head.key).toBe("hello");
    expect(bucket.head.value).toBe("aliens");
});
test("adding new key increases size", () => {
    const hashmap = new HashMap();

    hashmap.set("hello", "world");

    expect(hashmap.size).toBe(1);
});
test("updating a value does NOT increase the size", ()=>{
    const hashmap = new HashMap();
    hashmap.set("hello", "world");
    hashmap.set("hello", "aliens");

    expect(hashmap.size).toBe(1);
});
test("handles collision properly", ()=>{
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