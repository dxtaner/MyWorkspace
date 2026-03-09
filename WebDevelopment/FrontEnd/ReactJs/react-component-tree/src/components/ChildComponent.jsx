function ChildComponent(props) {
  return (
    <div>
      <h3>Child Component</h3>

      <p>Kullanıcı: {props.name}</p>
    </div>
  );
}

export default ChildComponent;
