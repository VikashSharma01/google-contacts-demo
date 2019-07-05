import React from 'react';
import './App.css';
import Contacts from './components/actionsInList'

function App() {

  return (
    <React.Fragment>
    <div className="App">
      <div className= "contact-head">
        <h3>My Contact List</h3>
      </div>
      <Contacts />
    </div>
    </React.Fragment>
  );
}

export default App;
