import { Component } from "react";
import css from './Phonebook.module.css'


export class ContactForm extends Component{

state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
    } 
    

    
    handleChang = e => {
        const { name, value } = e.currentTarget
        this.setState({[name]:value})
    }    
    
    handleSubmit = e => {
        e.preventDefault() 
        this.props.onSubmit(this.state)  
        this.reset()
    }

    reset = () => {
        this.setState({ name: '',
    number: ''})
    }

    render() {
        return (
            <form
                className={css.container}
                onSubmit={this.handleSubmit}
            >
                <label className={css.label} >
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"

                        value={this.state.name}
                        onChange ={this.handleChang}
                    
                     />
                </label>
                <label className={css.label} >
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"

                        value={this.state.number}

                        onChange ={this.handleChang}
                    />
                </label>
                <button className={css.btn} type="submit">Add contact</button>
        </form>) 
      
    }
}