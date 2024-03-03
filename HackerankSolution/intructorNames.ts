export default function babyNameGenerator(
  nameIdeas: string[],
  surnameIdeas: string[]
): string {
  if (nameIdeas.length < 2 || surnameIdeas.some((name) => name === "")) {
    return "";
  }

  const result: string[] = [];

  for (const nameIdea of nameIdeas) {
    for (const surnameIdea of surnameIdeas) {
      for (const middleName of nameIdeas.filter((name) => name !== nameIdea)) {
        const fullName = [nameIdea, middleName, surnameIdea].join(" ");
        result.push(fullName);
      }
    }
  }

  const uniqueResults = [...new Set(result)];

  const resultName = uniqueResults.sort();

  return resultName.join("\n");
}

// Example usage:
const exampleResult = babyNameGenerator(
  ["Fulano", "Dave", "Dave"],
  ["De Los Santos"]
);
console.log(exampleResult);
