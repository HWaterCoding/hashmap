class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}


export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    //convert linked list to string for debugging
    toString(){
        let result = "";
        let currentNode = this.head;

        while(currentNode){
            result += `{ ${currentNode.key} : ${currentNode.value} } => `;
            currentNode = currentNode.next;
        }

        result += "null";

        return result;
    }
    
    //adds a key to the end of the linked list in a bucket
    append(key, value){
        const newNode = new Node(key, value);
        
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
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

    //removes a key from a bucket
    remove(key){
        if(!this.head) return;

        if (this.head.key === key) {
            this.head = this.head.next;

            if(this.head === null){
                this.tail = null;
            }
            return;
        }

        let previousNode = this.head;
        let currentNode = this.head.next;

        while(currentNode !== null){
            if(currentNode.key === key){
                previousNode.next = currentNode.next;
                if(currentNode === this.tail){
                    this.tail = previousNode;
                }
                return;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    //forEach callback function to iterate every node
    eachNode(callback){
        let currentNode = this.head;
        while(currentNode !== null){
            callback(currentNode);
            currentNode = currentNode.next;
        }
    }
}