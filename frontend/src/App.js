import React, { Component } from 'react';
import axios from 'axios';

//const list = [
//  {
//    "id": 1,
//    "title": "1st todo",
//    "body": "This is the first todo."
//  },
//  {
//    "id": 2,
//    "title": "2nd todo",
//    "body": "This is the second todo."
//  },
//  {
//    "id": 3,
//    "title": "3rd todo",
//    "body": "This is the third todo."
//  }
//]

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;