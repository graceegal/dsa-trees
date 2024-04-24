import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  let evens = node.val % 2 === 0 ? 1 : 0;

  for (let child of node.children) {
    evens += countEvens(child);
  }

  return evens;
}

export { countEvens };
