import PropTypes from 'prop-types';
import SelectElement from '../SelectElement/SelectElement';
import { Label, Input, Textarea } from './FormField.styles';

const FormField = ({
  label,
  name,
  type,
  register,
  registerOptions = {},
  isTextarea = false,
  isSelect = false,
  options,
  placeholder,
  control,
}) => (
  <>
    <Label htmlFor={name}>{label}</Label>
    {isTextarea ? (
      <Textarea id={name} {...register(name, registerOptions)} />
    ) : isSelect ? (
      <SelectElement
        name={name}
        options={options}
        placeholder={placeholder}
        id={name}
        control={control}
      />
    ) : (
      <Input type={type} id={name} {...register(name, registerOptions)} />
    )}
  </>
);

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  registerOptions: PropTypes.object,
  isTextarea: PropTypes.bool,
  isSelect: PropTypes.bool,
  options: PropTypes.array,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  control: PropTypes.object,
};

export default FormField;
