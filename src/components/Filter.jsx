import css from './Phonebook.module.css'

export const Filter = ({ value, onChange }) => {
    return(
 <label>
    <span className={css.title}>Find contact by name</span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      name="filter"
      placeholder="Enter name"
    />
        </label>
    )
}