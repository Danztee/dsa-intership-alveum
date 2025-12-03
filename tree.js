class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // console.log(value);

    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // console.log(newNode);

    let temp = this.root;
    // console.log(temp, "temp");

    while (true) {
      if (newNode.value === temp.value) return undefined;

      if (newNode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right == null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root == null) return false;

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }

    return false;
  }
}

let myBST = new BST();

myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

console.log("BST Contains 27:");
console.log(myBST.contains(27));

console.log("\nBST Contains 17:");
console.log(myBST.contains(17));

// myBST.insert(2);
// myBST.insert(1);
// myBST.insert(3);
// myBST.insert(5);

// console.log("Root", myBST.root.value);
// console.log("\nRoot->Left:", myBST.root.left.value);
// console.log("\nRoot->Right:", myBST.root.right.value);

// if (myBST.root === null) {
//   console.log("Root: null");
// } else {
//   console.log("Root:", myBST.root.value);
// }
