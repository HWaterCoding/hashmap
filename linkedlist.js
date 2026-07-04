class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}


    //I should also store this.tail to make appending O(1) --> right now O(n)
export default class LinkedList{
    constructor(){
        this.head = null;
    }
    
    //adds a key to the end of the linked list in a bucket
    append(key, value){
        const newNode = new Node(key, value);
        
        if(this.head === null){
            this.head = newNode;
            return;
        }

        let currentNode = this.head;

        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    //looks for the key in the bucket
    find(key){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.key === key){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    //will I actually need this?
    contains(key){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.key === key) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    //removes a key from a bucket
    remove(key){
        if(!this.head) return;

        if (this.head.key === key) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.head;
        let currentNode = this.head.next;

        while(currentNode !== null){
            if(currentNode.key === key){
                previousNode.next = currentNode.next;
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }
}