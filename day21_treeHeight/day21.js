/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  if (!tree) return 0;
  const { value, left, right } = tree;
  return 1 + Math.max(treeHeight(left), treeHeight(right));
}
