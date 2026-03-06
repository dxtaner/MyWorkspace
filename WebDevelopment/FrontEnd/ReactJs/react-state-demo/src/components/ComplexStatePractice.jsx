import { useState } from "react";

function ComplexStatePractice() {
  const [profile, setProfile] = useState({
    name: "Taner",
    address: {
      city: "Bursa",
      zip: "16000",
    },
  });

  const changeZip = () => {
    setProfile({
      ...profile,
      address: {
        ...profile.address,
        zip: "34000",
      },
    });
  };

  return (
    <div>
      <h2>Changing Complex State Practice</h2>

      <p>İsim: {profile.name}</p>
      <p>Şehir: {profile.address.city}</p>
      <p>Posta Kodu: {profile.address.zip}</p>

      <button onClick={changeZip}>Zip Değiştir</button>
    </div>
  );
}

export default ComplexStatePractice;
