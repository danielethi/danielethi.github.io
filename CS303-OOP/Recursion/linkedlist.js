

// this will create linkedlist add,remove and print methods

let linkedlist={

add: function(list){

if (!list) return;

let node = new Node(list);

if (head) {

node.next = head;

}

head = node;

},

remove: function(list){

let curr = list;

if (list).value === value) {

list = list.next;

return;

}

},

print: function(list){

console.log(list.value);

if(list.next){

console.log(list.next);

}

}

};

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.print();

linkedlist.remove(2);

linkedlist.print();

