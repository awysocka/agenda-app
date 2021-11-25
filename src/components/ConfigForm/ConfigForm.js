import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import FormField from '../FormField/FormField';
import { Form, SubmitButton, Error } from '../EventForm/EventForm.styles';

const ConfigForm = ({ preloadedValues = null, onSubmitAction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', reValidateMode: 'onChange', defaultValues: preloadedValues });

  const onSubmit = (data) => onSubmitAction(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Edit configuration</h1>
      <FormField
        name='title'
        type='text'
        label='Event title'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      {errors.title && <Error>{errors.title.message}</Error>}
      <FormField
        name='tagTitle'
        type='text'
        label='Tag title'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      {errors.tagTitle && <Error>{errors.tagTitle.message}</Error>}
      <FormField
        name='tagsTitle'
        type='text'
        label='Tags title'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      {errors.tagsTitle && <Error>{errors.tagsTitle.message}</Error>}
      <SubmitButton type='submit' value='Save' />
    </Form>
  );
};

ConfigForm.propTypes = {
  preloadedValues: PropTypes.object,
  onSubmitAction: PropTypes.func,
};

export default ConfigForm;
