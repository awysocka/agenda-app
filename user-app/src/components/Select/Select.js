import PropTypes from 'prop-types';

const Select = ({ options, onChange, value }) => {
  const selectOption = (e) => {
    onChange(e.target.value);
  };

  return (
    <select onChange={selectOption} value={value}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
