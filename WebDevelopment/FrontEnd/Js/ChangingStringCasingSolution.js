let name = prompt("Adınızı girin:");

let firstChar = name.slice(0, 1);
let restOfName = name.slice(1);

let capitalizedName = firstChar.toUpperCase() + restOfName.toLowerCase();

alert("Merhaba " + capitalizedName);
