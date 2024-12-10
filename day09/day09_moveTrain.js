/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const moves = { U: [0, -1], D: [0, 1], R: [1, 0], L: [-1, 0] };

  for (let i = 0; i < board.length; i++) {
    const res = board[i].search("@");
    if (res < 0) continue;

    const [x, y] = moves[mov];
    const [posX, posY] = [res + x, i + y];
    switch (board[posY]?.charAt(posX)) {
      case "·":
        return "none";

      case "*":
        return "eat";

      default:
        return "crash";
    }
  }
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, "R"));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
