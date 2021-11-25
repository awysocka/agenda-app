import { useContext } from 'react';
import { Controller } from 'react-hook-form';
import { ThemeContext } from 'styled-components';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';
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

const SelectElement = ({ options, placeholder, control, name }) => {
  const themeContext = useContext(ThemeContext);
  const customStyles = customSelectStyle(themeContext);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <Select
          inputRef={ref}
          options={options}
          value={options.find((option) => option.value === value)}
          placeholder={placeholder}
          styles={customStyles}
          components={{ DropdownIndicator }}
          onChange={(val) => onChange(val.value)}
        />
      )}
    />
  );
};

SelectElement.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  control: PropTypes.object,
  name: PropTypes.string,
};

export default SelectElement;
