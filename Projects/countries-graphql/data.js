// data.js

const languages = [
  { name: "English", countries: ["USA", "UK", "Australia", "Canada"] },
  { name: "Spanish", countries: ["Spain", "Mexico", "Argentina", "Colombia"] },
  { name: "French", countries: ["France", "Canada", "Belgium", "Switzerland"] },
];

const continents = [
  { name: "Asia", countries: ["China", "India", "Japan", "South Korea"] },
  { name: "Europe", countries: ["Germany", "France", "UK", "Italy"] },
  {
    name: "Africa",
    countries: ["Nigeria", "Ethiopia", "Egypt", "South Africa"],
  },
];

const countries = [
  { name: "USA", continent: "North America", language: "English" },
  { name: "UK", continent: "Europe", language: "English" },
  { name: "Australia", continent: "Australia", language: "English" },
  { name: "France", continent: "Europe", language: "French" },
  { name: "Germany", continent: "Europe", language: "German" },
  { name: "China", continent: "Asia", language: "Mandarin" },
];

module.exports = { languages, continents, countries };
