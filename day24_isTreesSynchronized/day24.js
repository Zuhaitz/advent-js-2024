/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  if (!tree1 && !tree2) return [true, ""];
  if (!tree1 || !tree2) return [false, tree1?.value ?? tree2?.value ?? ""];

  const res1 = isTreesSynchronized(tree1.left, tree2.right);
  const res2 = isTreesSynchronized(tree1.right, tree2.left);
  return [tree1.value === tree2.value && res1[0] && res2[0], tree1.value];
}

// Examples
console.log(
  isTreesSynchronized(
    { value: "🎄", left: { value: "⭐" }, right: { value: "🎅" } },
    { value: "🎄", left: { value: "🎅" }, right: { value: "⭐" } }
  )
); // [true, "🎄"]
