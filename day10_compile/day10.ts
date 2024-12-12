function compile(instructions: string[]): number {
  const records = {};

  for (let i = 0; i < instructions.length; i++) {
    const [inst, x, y] = instructions[i].split(" ");

    switch (inst) {
      case "MOV":
        records[y] = !Number.isNaN(Number(x)) ? Number(x) : records[x] ?? 0;
        break;

      case "INC":
        records[x] = (records[x] ?? 0) + 1;
        break;

      case "DEC":
        records[x] = (records[x] ?? 0) - 1;
        break;

      case "JMP":
        if ((records[x] ?? 0) === 0) i = Number(y) - 1;
        break;
    }
  }

  return records["A"];
}

// Examples
const instructions = [
  "MOV -1 C", // copia -1 al registro 'C',
  "INC C", // incrementa el valor del registro 'C'
  "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
  "MOV C A", // copia el registro 'C' al registro 'a',
  "INC A", // incrementa el valor del registro 'a'
];

console.log(compile(instructions)); // -> 2

console.log(compile(["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"]));

console.log(
  compile(["MOV 3 C", "DEC C", "DEC C", "DEC C", "JMP C 3", "MOV C A"])
);
