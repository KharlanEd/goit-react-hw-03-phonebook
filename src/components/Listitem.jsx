import { Component } from 'react';
import css from './Phonebook.module.css'


export class ListItem extends Component {
  render() {
    const { name, number, onDeleteItem } = this.props;
    return (
      <li className={css.item}>
      <span className={css.text}>
      {name}:{number}
      </span>
    <button
      className={css.btn}          
      onClick={onDeleteItem}
      type="button"
      >
      Delete
      </button>
      </li>)
    }
};
