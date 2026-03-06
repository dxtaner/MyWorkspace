import { useState } from "react";

function ComplexState() {
  const [user, setUser] = useState({
    name: "Taner",
    age: 25,
    city: "Bursa",
  });

  const changeCity = () => {
    setUser({
      ...user,
      city: "İstanbul",
    });
  };

  return (
    <div>
      <h2>Changing Complex State</h2>
      <p>İsim: {user.name}</p>
      <p>Yaş: {user.age}</p>
      <p>Şehir: {user.city}</p>

      <button onClick={changeCity}>Şehri Değiştir</button>
    </div>
  );
}

export default ComplexState;
