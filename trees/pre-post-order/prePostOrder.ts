import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  if (!node) return [];

  const preOrdered = [];

  preOrdered.push(node.val);

  for (const child of node.children) {
    preOrdered.push(...preOrder(child));
  }

  return preOrdered;
}

//    1       [ 1,  ]
//    |
//    2       [2]

//            1       [1, 3, 7, 9, 5, 4, 6]
//          / | \
//         3  7  4
//            |   \
//            9   6
//            |
//            5




/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  if (!node) return [];

  const postOrdered = [];

  for (const child of node.children) {
    postOrdered.push(...postOrder(child));
  }

  postOrdered.push(node.val);

  return postOrdered;
}

export { preOrder, postOrder };
