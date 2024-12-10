/**
 *  @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const content = box.slice(1, box.length - 1);
  for (let i = 0; i < content.length; i++) {
    const e = content[i];
    if (e[0] !== "#" || e.at(-1) !== "#") return false;

    const characters = new Set(e);
    if (characters.has("*")) return true;
  }

  return false;
}

//Examples
console.log(inBox(["###", "#*#", "###"])); // ➞ true
console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true
console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
