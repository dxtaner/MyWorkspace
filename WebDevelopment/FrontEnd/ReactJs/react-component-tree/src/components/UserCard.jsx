function UserCard({ name, job }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Meslek: {job}</p>
    </div>
  );
}

export default UserCard;
