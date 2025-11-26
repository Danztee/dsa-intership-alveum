// // const names = ["Daniel", "John", "Ben"];
// // // const age = 20;
// // // const isLoggedIn = false;
// // // const user = names[1];

// // // console.log(user); //john

// // names.push("Dia");

// // console.log(names);

// // push
// // pop
// // peek
// // isempty

class Stack {
  constructor() {
    this.items = [];
  }

  // it adds to the stack
  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.items.pop();

    this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// class Daniel {}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());

// const person = {
//   name: "Daniel",
//   age: 10,
//   height: 170,
//   languages: ["English", "Yoruba"],

//   greet: function (name) {
//     console.log(`Hello, my name is ${this.name || name}`);
//   },
// };

// person.greet();

// function showThis() {
//   console.log(this);
// }

// showThis();
