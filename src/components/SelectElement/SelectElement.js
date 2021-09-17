import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Select, { components } from 'react-select';
import { IoChevronDownOutline } from 'react-icons/io5';
import { IoChevronUpOutline } from 'react-icons/io5';

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
    control: (styles, { isFocused }) => ({
      ...styles,
      cursor: 'pointer',
      border: `1px solid ${theme.colors.grey}`,
      outline: isFocused ? `3px solid ${theme.colors.primaryLight}` : 'none',
      boxShadow: 'none',

      ':hover': {
        ...styles[':hover'],
        borderColor: theme.colors.grey,
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

const SelectElement = ({ options, placeholder }) => {
  const themeContext = useContext(ThemeContext);
  const customStyles = customSelectStyle(themeContext);

  return (
    <Select
      options={options}
      placeholder={placeholder}
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};

export default SelectElement;
