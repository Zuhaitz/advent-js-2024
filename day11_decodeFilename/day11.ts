function decodeFilename(filename: string): string {
  const cut1 = filename.split(".");
  const cut2 = cut1[0].split(/_(.*)/s);

  return cut2[1] + "." + cut1[1];
}

console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
// ➞ "sleighDesign.png"

console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023"));
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename("987654321_elf-roster.csv.tempfile"));
// ➞ "elf-roster.csv"
