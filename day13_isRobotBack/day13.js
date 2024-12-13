/** @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  const movesInfo = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
  const inverse = { U: "D", D: "U", R: "L", L: "R" };
  let actionStack = new Set();
  let [x, y] = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    let action = moves[i];
    if (action === "*") action = moves[i + 1];
    else if (action === "!") action = inverse[moves[++i]];
    else if (i > 0 && action === "?") {
      action = moves[++i];
      if (actionStack.has(action)) continue;
    }

    const [mX, mY] = movesInfo[action];
    x += mX;
    y += mY;

    actionStack.add(action);
  }

  return x === 0 && y === 0 ? true : [x, y];
}

// Examples
console.log(isRobotBack("R")); // [1, 0]
console.log(isRobotBack("RL")); // true
console.log(isRobotBack("RLUD")); // true
console.log(isRobotBack("*RU")); // [2, 1]
console.log(isRobotBack("R*U")); // [1, 2]
console.log(isRobotBack("LLL!R")); // [-4, 0]
console.log(isRobotBack("R?R")); // [1, 0]
console.log(isRobotBack("U?D")); // true
console.log(isRobotBack("R!L")); // [2,0]
console.log(isRobotBack("U!D")); // [0,2]
console.log(isRobotBack("R?L")); // true
console.log(isRobotBack("U?U")); // [0,1]
console.log(isRobotBack("*U?U")); // [0,2]
console.log(isRobotBack("U?D?U")); // true
