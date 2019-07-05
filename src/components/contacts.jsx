import React, { Component } from 'react';
import './contacts.css'
import contactJson from '../contact-json/contacts.json';

class DisplayContactList extends Component {
    state = { 
        contact: contactJson
     };

     handleDelete = () => {
        console.log("Deleted Counter id=" + this);
        // const afterDelete = this.state.contact.filter(c => c.key !== deleteList);
        // this.setState({ afterDelete });
      };

    render() { 
        return ( 
            <div className = "hero-contact-list-class">
               {this.state.contact.map(contactItem => 
               <div className = "contact-list-class" key={contactItem.id}>
                <span className = "id-sec">{contactItem.id}</span>
                <img className = "avatar-image" src = {contactItem.avatar_url} alt = "Contact_image"/>
                <span>{contactItem.first_name}</span>
                <span>{contactItem.last_name}</span>
                <span>{contactItem.email}</span>
                <span>{contactItem.phone}</span>
                <span onClick={this.handleDelete} key={contactItem.id} className = "delete-list-item" >X</span>
                </div>)}
            </div>
         );
    }
}
 
export default DisplayContactList;