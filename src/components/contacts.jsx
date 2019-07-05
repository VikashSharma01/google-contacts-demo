import React, { Component } from 'react';
import './contacts.css'

class DisplayContactList extends Component{

    state = {
        val: this.props.value.value
      };
    
    render() {
        return ( 
            <div className = "hero-contact-list-class">
               <div className = "contact-list-class">
                <span className = "id-sec">{this.props.value.id}</span>
                <img className = "avatar-image" src = {this.props.value.avatar_url} alt = "Contact_image"/>
                <span>{this.props.value.first_name}</span>
                <span>{this.props.value.last_name}</span>
                <span>{this.props.value.email}</span>
                <span>{this.props.value.phone}</span>
                <button onClick={() => this.props.onDelete(this.props.value.id)} key={this.props.value.id} className = "delete-list-item" >X</button>
                </div>
            </div>
        );
    }
}

 
export default DisplayContactList;