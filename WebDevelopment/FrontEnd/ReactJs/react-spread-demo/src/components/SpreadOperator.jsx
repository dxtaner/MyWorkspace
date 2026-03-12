import { useState } from "react";

function SpreadOperator() {
  const [person, setPerson] = useState({
    name: "Taner",
    age: 25,
    city: "Bursa",
  });

  const updateAge = () => {
    setPerson({
      ...person,
      age: person.age + 1,
    });
  };

  return (
    <div>
      <h2>ES6 Spread Operator</h2>

      <p>İsim: {person.name}</p>
      <p>Yaş: {person.age}</p>
      <p>Şehir: {person.city}</p>

      <button onClick={updateAge}>Yaşı Artır</button>
    </div>
  );
}

export default SpreadOperator;
