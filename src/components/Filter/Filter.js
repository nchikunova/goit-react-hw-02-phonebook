import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className={s.item_filter}>
    <p className={s.text_filter}>Contacts search</p>
    <input
      className={s.item_element}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
