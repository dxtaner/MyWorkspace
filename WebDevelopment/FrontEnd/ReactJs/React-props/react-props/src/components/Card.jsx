function Card(props) {
  return (
    <div style={cardStyle}>
      <h2>{props.name}</h2>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "15px",
  margin: "10px",
  width: "250px",
};

export default Card;
