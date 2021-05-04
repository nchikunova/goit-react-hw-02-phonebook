import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="item_filter">
    <p className="item-text_filter">Contacts search</p>
    <input
      className="item-element"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
