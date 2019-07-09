import React, { Component } from 'react';
import './contacts.css'

class DisplayContactList extends Component{

    state = {

        isEditing : false,
        first_name : this.props.value.first_name,
        last_name : this.props.value.last_name,
        email : this.props.value.email,
        phone : this.props.value.phone
      };

      onUpdate = (e) => {
          this.setState({
            isEditing : true,
            [e.target.name] : e.target.value
          });
      }

      onUpdateSubmit = (e) => {
          e.preventDefault();
          const contact = {
              id: this.props.value.id,
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              avatar_url: this.props.value.avatar_url,
              phone: this.state.phone
          }
          console.log('v')
          this.props.onEdit(contact);

          this.setState({
              isEditing : false,
          });
      }

      renderForm = () => {
          return(
            <form className = "when-editing" onSubmit = {this.onUpdateSubmit} id = "form">
                <span className = "id-sec-edit">{this.props.value.id}</span>
                <img className = "avatar-image-edit" src = {this.props.value.avatar_url} alt = "Contact_image"/>
                <input className = "real-info" name = "first_name" type = "text" onChange = {this.onUpdate} value= {this.state.first_name} placeholder ="Enter Here" />
                <input className = "real-info" name = "last_name" type = "text"  onChange = {this.onUpdate} value= {this.state.last_name} placeholder ="Enter Here" />
                <input className = "real-info" name = "email" type = "email"  onChange = {this.onUpdate} value= {this.state.email} placeholder ="Enter Here" />
                <input className = "real-info" name = "phone" type = "tel"  onChange = {this.onUpdate} value= {this.state.phone} placeholder ="Enter Here" />
                <input className = "real-info-edit" id = "save" type= "submit" value = "save" />
                <button onClick={() => this.props.onDelete(this.props.value.id)} key={this.props.value.id} className = "delete-list-item-edit" >delete</button>
            </form>
          )
      };

      renderAllList = () => {
          return (
            <div className = "contact-list-class">
                        <span className = "id-sec">{this.props.value.id}</span>
                        <img className = "avatar-image" src = {this.props.value.avatar_url} alt = "Contact_image"/>
                        <span>{this.props.value.first_name}</span>
                        <span>{this.props.value.last_name}</span>
                        <span>{this.props.value.email}</span>
                        <span>{this.props.value.phone}</span>
                        <button onClick = {(event) => {this.onUpdate(event)}} uniquekey={this.props.value.id} className = "edit-list-item">&#9998;</button>
                        <button onClick={() => this.props.onDelete(this.props.value.id)} key={this.props.value.id} className = "delete-list-item" >&#x2421;</button>
                    </div>
          )
      };

    render() {
        return ( 

            <div className = "hero-contact-list-class">
               { 
                   this.state.isEditing ? this.renderForm() : this.renderAllList()
               }
            </div>
        );
    }
}

 
export default DisplayContactList;