function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  if (!tree) return 0;
  const { value, left, right } = tree;
  return 1 + Math.max(treeHeight(left), treeHeight(right));
}
