/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let loopStart = -1;
  let jump = [];
  let res = 0;
  const instructions = code.split("");
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === ">") continue;
    if (instructions[i] === "}") {
      jump.pop();
      continue;
    }
    if (instructions[i] === "]") {
      if (res === 0) {
        jump.pop();
        continue;
      } else i = loopStart;
    }

    if (jump.at(-1)) continue;

    if (instructions[i] === "{") {
      jump.push(res === 0 ? true : false);
      continue;
    }

    if (instructions[i] === "[") {
      loopStart = i;
      jump.push(res === 0 ? true : false);
      continue;
    }

    if (instructions[i] === "+") res += 1;
    else res -= 1;
  }

  return res;
}

console.log("Gives", execute("+++"), "- we expect 3"); // 3
console.log("Gives", execute("+--"), "- we expect -1"); // -1
console.log("Gives", execute(">+++[-]"), "- we expect 0"); // 0
console.log("Gives", execute(">>>+{++}"), "- we expect 3"); // 3
console.log("Gives", execute("+{[-]+}+"), "- we expect 2"); // 2
console.log("Gives", execute("{+}{+}{+}"), "- we expect 0"); // 0
console.log("Gives", execute("------[+]++"), "- we expect 2"); // 2
console.log("Gives", execute("-[++{-}]+{++++}"), "- we expect 5"); // 5
