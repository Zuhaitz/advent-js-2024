/**
 *  @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const stack = [[]];
  packages.split("").map((pack) => {
    if (pack === "(") return stack.push([]);
    if (pack === ")") {
      const group = stack.pop();
      const previous = stack.pop();
      return stack.push(previous.concat(group.reverse()));
    }

    stack[stack.length - 1].push(pack);
  });

  return stack[0].join("");
}

console.log(fixPackages("a(cb)de"));
console.log(fixPackages("a(bc(def)g)h"));
console.log(fixPackages("abc(def(gh)i)jk"));
console.log(fixPackages("a(b(c))e"));
