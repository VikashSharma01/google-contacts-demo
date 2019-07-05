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
      <DisplayContactList />
    </div>
    </React.Fragment>
  );
}

export default App;
