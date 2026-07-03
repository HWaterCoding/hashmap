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
    }

    //THIS NEEDS TO UPDATE DUPLICATE KEYS!!
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

    contains(key){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.key === key) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

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