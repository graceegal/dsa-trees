import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (!node) return 0;

  const depth = node.children.map(c => maxDepth(c));

  return depth.length > 0 ? Math.max(...depth) + 1 : 1;
}

export { maxDepth };
