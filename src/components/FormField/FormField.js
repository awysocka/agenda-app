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

export default FormField;
