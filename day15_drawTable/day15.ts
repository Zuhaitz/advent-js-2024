function drawTable(data: Array<Record<string, string | number>>): string {
  const headers = Object.keys(data[0]);

  // Get max length of each column
  const colWidths = headers.map((header) =>
    Math.max(header.length, ...data.map((row) => String(row[header]).length))
  );

  // Create marks
  const mark = "+" + colWidths.map((v) => "-".repeat(v + 2)).join("+") + "+";

  // Generate header
  const headerValues = headers.map((value, i) => {
    const headerFormatted = value.charAt(0).toUpperCase() + value.slice(1);
    return headerFormatted.padEnd(colWidths[i]);
  });
  const header = "| " + headerValues.join(" | ") + " |";

  // Generate header
  const rows = data.map((row) => {
    const res = headers
      .map((v, i) => String(row[v]).padEnd(colWidths[i]))
      .join(" | ");
    return `| ${res} |`;
  });

  // Put the parts together
  const res = [mark, header, mark, rows.join("\n"), mark];
  return res.join("\n");
}

console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
// +---------+----------+
// | Name    | City     |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

console.log(
  drawTable([
    { gift: "Doll", quantity: 10 },
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
  ])
);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
