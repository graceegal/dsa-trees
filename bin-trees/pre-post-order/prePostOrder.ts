import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  if (!node) return [];

  const vals = [];

  //push current val -> then push left -> push right
  vals.push(node.val);

  vals.push(...preOrder(node.lnode));
  vals.push(...preOrder(node.rnode));

  return vals;
}

/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  if (!node) return [];

  const vals = [];

  //push current val -> then push left -> push right

  vals.push(...postOrder(node.lnode));
  vals.push(...postOrder(node.rnode));

  vals.push(node.val);
  return vals;
}

export { preOrder, postOrder };
