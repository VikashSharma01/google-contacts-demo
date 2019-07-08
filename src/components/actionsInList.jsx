import React, { Component } from 'react';
import contactJson from '../contact-json/contacts.json';
import DisplayContactList from '../components/contacts';
import AddContact from '../components/addContact';
import './contacts.css'

class Contacts extends Component {

    state = {
        contactList: contactJson,
        filtered: []
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

        // console.log(filter);

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

    render() { 
        console.log("props"+ this.props);
        return ( 
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />

                <AddContact onSubmit = {this.handleNewContact} />

                <div className = "action-list" id= "action-contact-list">
                    {this.state.contactList.map(value => 
                        <div key ={value.id} className = "main-contact-list-head">
                            <DisplayContactList 
                            key = {value.id}
                            onDelete={this.handleDelete}
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