import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import FormField from '../FormField/FormField';
import { Form, SubmitButton, Error } from '../EventForm/EventForm.styles';

const TagForm = ({ preloadedValues = null, onSubmitAction, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', reValidateMode: 'onChange', defaultValues: preloadedValues });

  const onSubmit = (data) => onSubmitAction(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>
      <FormField
        name='name'
        type='text'
        label='Name'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      {errors.name && <Error>{errors.name.message}</Error>}
      <FormField name='color' type='color' label='Color' register={register} />
      <SubmitButton type='submit' value='Save' />
    </Form>
  );
};

TagForm.propTypes = {
  preloadedValues: PropTypes.object,
  onSubmitAction: PropTypes.func,
};

export default TagForm;
