import {Component} from "react";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { ContactForm } from "./Form";
import css from './Phonebook.module.css'
import { nanoid } from 'nanoid'



export class App extends Component {
 state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
  filter: ''
  }
  
  componentDidUpdate(prevProps,prevState) {
    if (this.state.contacts !== prevState.contact) {
      localStorage.setItem('contact',JSON.stringify(this.state.contacts))
    }
      
  }
  
  componentDidMount() {
    const contact = localStorage.getItem('contact')
   
    const parsContact = JSON.parse(contact)
    if (parsContact)
      this.setState({contacts:parsContact})
  }

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  findName = name => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );
  };

  formSubmit = ({ name, number }) => {
    const checkContact = this.findName(name);

    if (checkContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id:nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  

  render() {
  const { filter } = this.state;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
      <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit } />
      
        <h2 className={css.title}>Contacts</h2>
        <Filter onChange={this.handleFilterChange} value={filter}/>
        <ContactList  visibleContacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}/>
        
      </div>  
    </div>
  )
}
}