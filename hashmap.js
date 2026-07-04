import LinkedList from "./linkedlist.js";

export default class HashMap{
    
    constructor(loadFactor = 0.8, capacity = 16){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(capacity).fill(null);
        this.size = 0;
    }

    //takes a key and produces a hashcode
    hash(key){
        let hashcode = 0;
        for(const char of key){
            hashcode = hashcode * 31 + char.charCodeAt(0);
        }
        return hashcode % this.capacity;
    }

    //takes an argument of a key and value and assigns the value to the key
    set(key, value){
        //hash the key to create bucketIndex
        const bucketIndex = this.hash(key);

        //check if bucket empty. if empty, create linkedlist
        if(this.buckets[bucketIndex] === null){
            this.buckets[bucketIndex] = new LinkedList();
        }

        //check if node with same key exists. if yes, rewrite value. if no, append node.
        const node = this.buckets[bucketIndex].find(key);
        if(node){
            node.value = value;
        } else if(node === null){
            this.buckets[bucketIndex].append(key, value);
            this.size++;
        }

        // remove this, just to check that it creates list/node properly
        return this.buckets[bucketIndex];
    }

    //takes a key as an argument and returns the value 
    get(key){
        //hash the key to determine which bucket it is in.
        const bucketIndex = this.hash(key);
        if(this.buckets[bucketIndex] === null) return null;
        //check if that bucket contains the key you're looking for
        const node = this.buckets[bucketIndex].find(key);
        //if it DOES, return the value that's assigned to the key.
        if(node){
            return node.value
        } 
        
        //if it doesn't, return null.
        return null;

    }

    //returns true or false based on whether the key passed in exists within the hashmap
    has(key){
        //hash the key to determine which bucket it would be in.
        //go through the linked list in the bucket
        //check the key of every node in the bucket
        //if the key matches, return true. If the tail is reached, return false
    }

    // takes a key as an argument to remove 
    remove(key){
        //again, hash the key to determine which bucket it would be in
        //remove the node with the corresponding key, same as a regular linked list
    }

    // returns the total number of keys stored in the hashmap
    length(){
        //literally just return the size?
        return this.size;
    }

    // removes ALL entries stored in the hashmap
    clear(){

    }

    // returns an array containing every key contained within the hashmap
    keys(){

    }

    // returns an array containing every value contained within the hashmap
    values(){

    }

    // returns an array containing every key:value pair contained within the hashmap
    entries(){

    }
}


//I think this will break the hashmap by creating new indexes.
// if(this.size / this.capacity >= this.loadFactor){
//     this.capacity *= 2;
// }