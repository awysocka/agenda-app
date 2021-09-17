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
}) => (
  <>
    <Label htmlFor={name}>{label}</Label>
    {isTextarea ? (
      <Textarea id={name} {...register(name, registerOptions)} />
    ) : isSelect ? (
      <SelectElement options={options} placeholder={placeholder} />
    ) : (
      <Input type={type} id={name} {...register(name, registerOptions)} />
    )}
  </>
);

export default FormField;
