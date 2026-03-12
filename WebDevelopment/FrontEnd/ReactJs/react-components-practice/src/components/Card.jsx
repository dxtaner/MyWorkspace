function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>{props.job}</p>

      <p>{props.email}</p>
    </div>
  );
}

export default Card;
