type Space = "·" | "@" | "*" | "o";
type Board = Space[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
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
