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

        //check if the bucket is empty (null)
        //if bucket IS empty, create a new linkedList
        if(this.buckets[bucketIndex] === null){
            this.buckets[bucketIndex] = new LinkedList();
        }

        //check if the key already exists (maybe use has() method?)
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i].contains(key)){
                //if the key already exists in this bucket, overwrite its value
            }
        }

        //if bucket is NOT empty, assign current object as .next (tail node)
        this.buckets[bucketIndex].append();
        
        //create an object {} with the key and value passed in
        const object = {
            key: key,
            value: value
        }
        //store that object in the corresponding bucket.

        //increment the this.size property everytime a key is set
        this.size++;
        //check after incrementing if the loadFactor has been met. 
        if(this.size / this.capacity >= this.loadFactor){
            //if the load factor has been met then increase the capacity*2
            this.capacity * 2;
        }
    }

    //takes a key as an argument and returns the value 
    get(key){
        //hash the key to determine which bucket it is in.
        //check if that bucket contains the key you're looking for
        //if it doesn't, return null.
        //if it DOES, return the value that's assigned to the key.
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