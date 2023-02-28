import React, { Component } from 'react';
import './App.css';
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

class App extends Component {
  state = {
    users: []
  }
  
  async componentDidMount() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.setState({
        users: res.data  
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  addUser = async (newUser) => {
    try {
      const { data } = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
      this.setState({
        users: [data, ...this.state.users]
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      this.setState({
        users: this.state.users.filter(user => user.id !== id)
      });
    } catch (error) {
      console.log(error);
    }
  } 
  
  render() {
    const { users } = this.state;
    
    return (
      <div className="App">
        <div className="container">
          <h4 className ="display-4">Users App</h4>
          <hr/>
          <AddUser addUser={this.addUser} />
          <Users deleteUser={this.deleteUser} users={users} />
        </div>
        <div style={{ marginBottom: "500px" }}></div>
      </div>
    );
  }
}

export default App;
