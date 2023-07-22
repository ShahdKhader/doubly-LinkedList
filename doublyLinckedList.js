const doublyLinkedListNode = require("./doublyLinkedListNode");
class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get(index) {
      if (index < 0 || index >= this.length) return undefined;
      let current;
      if (index <= this.length / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > index; i--) {
          current = current.prev;
        }
      }
      return current;
    }
    getNode(index) {
      if (index < 0 || index >= this.length) return null;
  
      let current;
      if (index <= this.length / 2) {
          current = this.head;
          for (let i = 0; i < index; i++) {
              current = current.next;
          }
      } else {
          current = this.tail;
          for (let i = this.length - 1; i > index; i--) {
              current = current.prev;
          }
      }
      return current;
  }
    push(val){
        const newNode = new 
        doublyLinkedListNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    pop(){
        if(!this.head) return undefined;
        const removedValue = this.tail.value;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
           // this.tail = null;
        }
        this.length--;
        return removedValue;
    }
    shift() {
        if (!this.head) return undefined;
        const removedValue = this.head.value;
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.head.prev = null;
        }
        this.length--;
        return removedValue;
    }
    unshift(val) {
        const newNode = new doublyLinkedListNode(val);
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
        }
        this.length++;
    }
    set(index, val) {
        const node = this.getNode(index);
        if (node) {
          node.value = val;
          return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
          this.unshift(val);
        } else if (index === this.length) {
          this.push(val);
        } else {
          const newNode = new doublyLinkedListNode(val);
          const prevNode = this.get(index - 1);
          const nextNode = prevNode.next;
    
          prevNode.next = newNode;
          newNode.prev = prevNode;
    
          newNode.next = nextNode;
          nextNode.prev = newNode;
    
          this.length++;
        }
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
    
        const removedNode = this.get(index);
        const prevNode = removedNode.prev;
        const nextNode = removedNode.next;
    
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    
        removedNode.prev = null;
        removedNode.next = null;
    
        this.length--;
    
        return removedNode.value;
    }
    
}
module.exports = doublyLinkedList;

