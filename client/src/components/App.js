import React from 'react';
import './App.css';
import List from './demoOnly/List';
import Form from './demoOnly/Form';

const App = () => {
  return (
    <div className="App">
      <div className="col-md-4 offset-md-1">
        <h2>Users</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new user</h2>
        <Form />
      </div>
    </div>
  );
};

export default App;
