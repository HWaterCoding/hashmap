import LinkedList from "./linkedlist.js";

export default class HashMap{
    
    constructor(loadFactor = 0.8, capacity = 16){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(capacity).fill(null);
        this.size = 0;
    }

    print(){
        let result = "";

        for(let i = 0; i < this.buckets.length; i++){
            result += `Bucket ${i}: \n`;
            if(this.buckets[i] === null) {
                result += "null \n\n";
            }
            else{
                result += this.buckets[i].toString() + "\n\n";
            }
        }
        return result;
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

        const bucketIndex = this.hash(key);

        if(this.buckets[bucketIndex] === null){
            this.buckets[bucketIndex] = new LinkedList();
        }

        const node = this.buckets[bucketIndex].find(key);
        if(node){
            node.value = value;
        } else if(node === null){
            this.buckets[bucketIndex].append(key, value);
            this.size++;
        }
    }

    //takes a key as an argument and returns the value 
    get(key){
        const bucketIndex = this.hash(key);

        if(this.buckets[bucketIndex] === null) return null;

        const node = this.buckets[bucketIndex].find(key);
        
        return node ? node.value : null;
    }

    //returns true or false based on whether the key passed in exists within the hashmap
    has(key){
        const bucketIndex = this.hash(key);

        if(this.buckets[bucketIndex] === null) return false;

        const node = this.buckets[bucketIndex].find(key);
        
        return node ? true: false;
    }

    // takes a key as an argument to remove 
    remove(key){
        const bucketIndex = this.hash(key);

        if(this.buckets[bucketIndex] === null) return false;

        if(this.buckets[bucketIndex].find(key)){
            this.buckets[bucketIndex].remove(key);
            this.size--;
            return true;
        }

        return false;
    }

    // returns the total number of keys stored in the hashmap
    length(){
        return this.size;
    }
    
    // removes ALL entries stored in the hashmap
    clear(){
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;
    }

    // returns an array containing every key contained within the hashmap
    keys(){
        const keys = [];

    }

    // returns an array containing every value contained within the hashmap
    values(){
        const values = [];

    }

    // returns an array containing every key:value pair contained within the hashmap
    entries(){
        const entries = [];

    }
}


//I think this will break the hashmap by creating new indexes.
// if(this.size / this.capacity >= this.loadFactor){
//     this.capacity *= 2;
// }