import React, { Component } from 'react';
import contactJson from '../contact-json/contacts.json';
import DisplayContactList from '../components/contacts';
import './contacts.css';

class Contacts extends Component {

    state = {
        contactList: contactJson
    };

    handleDelete = v => {
        console.log("Deleted Contact id=" + v);
        const contactList = this.state.contactList.filter(c => c.id !== v);
        this.setState({ contactList });
      };

    render() { 
        console.log("props"+ this.props);
        return ( 
            <div>
                {/* <AddingNewContacts onSubmit = {this.handleNewContact} /> */}

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