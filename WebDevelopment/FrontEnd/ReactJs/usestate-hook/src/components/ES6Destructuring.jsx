function UserCard({ name, age, job }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <h3>ES6 Destructuring Example</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}

function ES6Destructuring() {
  const user = {
    name: "Taner",
    age: 25,
    job: "Software Developer",
  };

  return (
    <div>
      <UserCard {...user} />
    </div>
  );
}

export default ES6Destructuring;
