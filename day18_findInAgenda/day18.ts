function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const lines = agenda.split("\n");
  const res = lines.filter((line) => line.includes(phone));
  if (res.length > 1 || res.length === 0) return null;

  const data = res[0];
  const name = data.substring(data.indexOf("<") + 1, data.indexOf(">"));
  const address = data
    .replace(/\+[\d-]+/, "")
    .replace(/\<.*>/, "")
    .trim();

  return { name, address };
}

// Examples
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, "34-600-123-456"));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, "600-987"));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, "111"));
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, "1"));
// null
// Explicación: Demasiados resultados
