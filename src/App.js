import React from 'react';
import './App.css';
import DisplayContactList from './components/contacts';

function App() {

  return (
    <React.Fragment>
    <div className="App">
      <div className= "contact-head">
        <h3>My Contact List</h3>
      </div>
      <div className = "contact-head-discription">
          <h3>ID</h3>
          <h3>ICON</h3>
          <h3>FIRST NAME</h3>
          <h3>LAST NAME</h3>
          <h3>EMAIL ID</h3>
          <h3>NUMBER</h3>
          <h3>DELETE</h3>
        </div>
      <DisplayContactList />
    </div>
    </React.Fragment>
  );
}

export default App;
