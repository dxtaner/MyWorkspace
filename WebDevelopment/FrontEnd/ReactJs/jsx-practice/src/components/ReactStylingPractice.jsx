function ReactStylingPractice() {
  const user = "Taner";
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const titleStyle = {
    color: "#4a47a3",
    fontSize: "32px",
    textAlign: "center",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    margin: "20px auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  };

  const profileImg = "https://i.pravatar.cc/200";

  return (
    <div style={{ textAlign: "center" }}>
      {/* Inline Styling */}

      <h1 style={titleStyle}>React Styling Practice</h1>

      {/* JavaScript Expressions in JSX */}

      <h2>
        {greeting}, {user}
      </h2>

      <p>Current Time: {hour}:00</p>

      <p>Lucky Number: {Math.floor(Math.random() * 100)}</p>

      {/* JSX Attributes */}

      <div style={cardStyle}>
        <img
          src={profileImg}
          alt="profile"
          width="120"
          style={{ borderRadius: "50%" }}
        />

        <h3>{user}</h3>

        <p>Frontend Developer</p>
      </div>
    </div>
  );
}

export default ReactStylingPractice;
