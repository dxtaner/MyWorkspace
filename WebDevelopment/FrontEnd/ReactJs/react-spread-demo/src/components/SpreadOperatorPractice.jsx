import { useState } from "react";

function SpreadOperatorPractice() {
  const [user, setUser] = useState({
    name: "Taner",
    job: "Software Developer",
    skills: ["React", "Node.js"],
  });

  const addSkill = () => {
    setUser({
      ...user,
      skills: [...user.skills, "Python"],
    });
  };

  return (
    <div>
      <h2>Spread Operator Practice</h2>

      <p>İsim: {user.name}</p>
      <p>Meslek: {user.job}</p>

      <h4>Skills:</h4>

      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={addSkill}>Skill Ekle</button>
    </div>
  );
}

export default SpreadOperatorPractice;
