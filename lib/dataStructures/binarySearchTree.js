'use strict';

class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    getData() {
        return this.data;
    }

    getMin() {
        let current = this;
        while(current.left) {
            current = current.left;
        }
        return current.getData();
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let n = new Node(data, null, null);
        if (!this.root) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.getData()) {
                    current = current.left;
                    if (!current) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (!current) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    getMin() {
        if (!this.root) return null;

        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.getData();
    }

    getMax() {
        if (!this.root) return null;

        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.getData();
    }

    countNode(node) {
        if (!node) return 0;
        return this.countNode(node.left) + this.countNode(node.right) + 1;
    }

    getDepth(node) {
        if (!node) return 0;
        let depthLeft = this.getDepth(node.left);
        let depthRight = this.getDepth(node.right);
        return depthLeft > depthRight ? ++depthLeft : ++depthRight;
    }

    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.getData());
            this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if (node) {
            console.log(node.getData());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(ndoe.getData());
        }
    }

    levelTraverse(node) {
        if (!node) return;

        let q = [node],
            current = 0,
            last = 1;

        while (current < q.length) {
            last = q.length;
            let A = [];
            while (current < last) {
                A.push(q[current].getData());
                if (q[current].left) {
                    q.push(q[current].left);
                }
                if (q[current].right) {
                    q.push(q[current].right);
                }
                current++;
            }
            console.log(A.toString());
        }
    }

    find(data) {
        let current = this.root;
        while (current) {
            if (Object.is(data, current.getData())) {
                return current;
            } else if (data < current.getData()) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    deleteNode(node, data) {
        if (!node) {
            return node;
        } else if (data < node.data) {
            node.left = this.deleteNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.deleteNode(node.right, data);
        } else {
            if ((!node.left) && (!node.right)) {
                node = null;
            } else if (!node.left) {
                node = node.right;
            } else if (!node.right) {
                node = node.left;
            } else {
                let temp = node.right.getMin();
                node.data = temp;
                node.right = this.deleteNode(node.right, temp);
            }
        }
        return node;
    }

    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }
}

module.exports = BST;
