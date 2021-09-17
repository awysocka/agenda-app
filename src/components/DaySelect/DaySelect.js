import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Select, { components } from 'react-select';
import { IoChevronDownOutline } from 'react-icons/io5';
import { IoChevronUpOutline } from 'react-icons/io5';

const StyledDaySelect = styled(Select)`
  width: 100%;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 200px;
  }
`;

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </components.DropdownIndicator>
    )
  );
};

const customSelectStyle = (theme) => {
  return {
    dropdownIndicator: (styles) => ({
      ...styles,
      color: theme.colors.darkGrey,
    }),
    control: (styles, { isFocused}) => ({
      ...styles,
      cursor: 'pointer',
      borderColor: isFocused ? theme.colors.grey : theme.colors.lightGrey,
      boxShadow: isFocused ? theme.colors.grey : theme.colors.lightGrey,
      
      ':hover': {
        ...styles[':hover'],
        borderColor: theme.colors.grey,
        boxShadow: theme.colors.grey,
      },
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected
        ? theme.colors.primary
        : isFocused
        ? theme.colors.primaryLight
        : null,
      color: isSelected
        ? theme.colors.white
        : isFocused
        ? theme.colors.darkGrey
        : theme.colors.darkGrey,
      cursor: 'pointer',

      ':active': {
        ...styles[':active'],
        backgroundColor: isSelected ? theme.colors.primary : theme.colors.white,
      },
    }),
  };
};

const DaySelect = ({ options, onChange, value }) => {
  const themeContext = useContext(ThemeContext);

  const customStyles = customSelectStyle(themeContext);

  const selectOption = (selectedOption) => {
    onChange(selectedOption.value);
  };

  const selectOptions = options.map((option, index) => {
    return { value: option, label: `Day ${index + 1} | ${option}` };
  });

  const defaultValue = selectOptions.find((option) => option.value === value);

  return (
    <StyledDaySelect
      styles={customStyles}
      components={{ DropdownIndicator }}
      onChange={selectOption}
      defaultValue={defaultValue}
      options={selectOptions}
    />
  );
};

DaySelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default DaySelect;
