import { Component } from "react";
import { ListItem } from "./Listitem";



export class ContactList extends Component{
    render() {
    const { visibleContacts, onDeleteContact } = this.props;
    return (
      <ul >
        {visibleContacts.map(({ id, name, number }) => { return (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteItem={()=>onDeleteContact(id)}
          />
        ); })}
      </ul>
    );
  };
};
     
ContactList.defaultProps = {
  visibleContacts: [],
};

