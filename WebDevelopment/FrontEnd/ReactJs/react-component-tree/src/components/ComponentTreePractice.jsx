import UserCard from "./UserCard";

function ComponentTreePractice() {
  const users = [
    { id: 1, name: "Taner", job: "Developer" },
    { id: 2, name: "Messi", job: "Footballer" },
    { id: 3, name: "Sad", job: "Data Scientist" },
  ];

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <UserCard key={user.id} name={user.name} job={user.job} />
      ))}
    </div>
  );
}

export default ComponentTreePractice;
