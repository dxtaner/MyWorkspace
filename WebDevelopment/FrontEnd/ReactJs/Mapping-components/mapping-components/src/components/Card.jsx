function Card({ name, emoji, meaning }) {
  return (
    <div style={cardStyle}>
      <h2>
        {emoji} {name}
      </h2>
      <p>{meaning}</p>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px",
  borderRadius: "8px",
  width: "250px",
};

export default Card;
