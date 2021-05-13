import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';

const StyledDaySelect = styled(Select)`
  max-width: 200px;
`;

const DaySelect = ({ options, onChange, value }) => {
  const selectOption = (selectedOption) => {
    onChange(selectedOption.value);
  };

  const selectOptions = options.map((option, index) => {
    return { value: option, label: `Day ${index + 1} | ${option}` };
  });

  const defaultValue = selectOptions.find((option) => option.value === value);

  return (
    <StyledDaySelect onChange={selectOption} defaultValue={defaultValue} options={selectOptions} />
  );
};

DaySelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default DaySelect;
