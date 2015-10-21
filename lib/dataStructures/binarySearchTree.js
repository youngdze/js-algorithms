'use strict';

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

Node.prototype.getData = function () {
    return this.data;
};

function BST() {
    this.root = null;
}

BST.prototype.insert = function (data) {
    var n = new Node(data, null, null);
    if (!this.root) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
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
};

BST.prototype.getMin = function () {
    var current = this.root;
    while (current.left) {
        current = current.left;
    }
    return current.getData();
};

BST.prototype.getMax = function () {
    var current = this.root;
    while (current.right) {
        current = current.right
    }
    return current.getData();
};

BST.prototype.countNode = function (node) {
    if (!node) return 0;
    return this.countNode(node.left) + this.countNode(node.right) + 1;
};

BST.prototype.getDepth = function (node) {
    if (!node) return 0;
    var depthLeft = this.getDepth(node.left);
    var depthRight = this.getDepth(node.right);
    return depthLeft > depthRight ? (depthLeft + 1) : (depthRight + 1);
};

BST.prototype.inOrder = function (node) {
    if (node) {
        this.inOrder(node.left);
        console.log(node.getData());
        this.inOrder(node.right);
    }
};

BST.prototype.preOrder = function (node) {
    if (node) {
        console.log(node.getData());
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
};

BST.prototype.postOrder = function (node) {
    if (node) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.getData());
    }
};

BST.prototype.levelTraverse = function (node) {
    if (!node) return;

    var q = [node],
        current = 0,
        last = 1;
    while(current < q.length) {
        last = q.length;
        var A = [];
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
};

module.exports = BST;
