export default class HashMap{
    
    constructor(loadFactor = 0.75, capacity = 16){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(capacity).fill(null);
        this.size = 0;
    }

    //takes a key and produces a hashcode
    hash(key){
        let hashcode = 0;
        for(const char of key){
            hashcode += hashcode * 31 + char.charCodeAt(0);
        }
        return hashcode % this.capacity;
    }

    //takes an argument of a key and value and assigns the value to the key
    set(key, value){

    }

    //takes a key as an argument and returns the value 
    get(key){

    }

    //returns true or false based on whether the key passed in exists within the hashmap
    has(key){

    }

    // takes a key as an argument to remove 
    remove(key){

    }

    // returns the total number of keys stored in the hashmap
    length(){

    }

    // removes ALL entries stores in the hashmap
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