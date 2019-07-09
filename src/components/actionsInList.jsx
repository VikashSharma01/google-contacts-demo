import React, { Component } from 'react';
import contactJson from '../contact-json/contacts.json';
import DisplayContactList from '../components/contacts';
import AddContact from '../components/addContact';
import './contacts.css'

class Contacts extends Component {

    state = {
        contactList: contactJson,
    };

    handleDelete = v => {
        console.log("Deleted Contact id=" + v);
        const contactList = this.state.contactList.filter(c => c.id !== v);
        this.setState({ contactList });
      };

      handleNewContact = v1 =>{
        console.log(v1);
        this.setState( prevState => ({
            contactList: [
              ...prevState.contactList, v1
            ]
        }))
      }


    handleChange = e => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.contactList;
      newList = currentList.filter(item => {
        const fName_lc = item.first_name.toLowerCase();
        const lName_lc = item.last_name.toLowerCase();
        const email_lc = item.email.toLowerCase();
        const phone_no = item.phone;

        const filter = e.target.value.toLowerCase();
        
        return fName_lc.includes(filter) || 
               lName_lc.includes(filter) || 
               email_lc.includes(filter) || 
               phone_no.includes(filter);
      });
    } 
    else {
      newList = contactJson;
    }
    this.setState({
        contactList: newList
    });
  }

  onEdit = e => {
    console.log(e);
    let contacts = this.state.contactList.slice();
    contacts = contacts.map(value => {
       console.log(e.id)
      if(value.id === e.id){
        value = {...e};
      }
      return value;
      
    });
    
    this.setState({  contactList : contacts })
    
  }

    render() { 
        return ( 
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />

                <AddContact onSubmit = {this.handleNewContact} />

                <div className = "action-list" id= "action-contact-list">
                    {this.state.contactList.map(value => 
                        <div key ={value.id} className = "main-contact-list-head">
                            <DisplayContactList 
                            key = {value.id}
                            uniquekey = {value.id}
                            onDelete={this.handleDelete}
                            onEdit = {this.onEdit}
                            value = {value}
                            />
                        </div>
                        )}
                </div>
            </div>
         );
    }
}

export default Contacts;
