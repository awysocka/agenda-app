import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getData } from '../../api/api';
import FormField from '../FormField/FormField';
import { Form, SubmitButton, Error } from './EventForm.styles';

const EventForm = ({ preloadedValues = null, onSubmitAction, title }) => {
  const [tags, setTags] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: 'onTouched', reValidateMode: 'onChange', defaultValues: preloadedValues });

  useEffect(() => {
    getData('/tags').then((data) => setTags(data));
  }, []);

  const tagsList = tags.map((tag) => {
    return { label: tag.name, value: tag.name };
  });

  const onSubmit = (data) => onSubmitAction(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>
      <FormField
        name='date'
        type='date'
        label='Date'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      {errors.date && <Error>{errors.date.message}</Error>}
      <FormField
        name='startTime'
        type='time'
        label='Start time'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      <FormField
        name='endTime'
        type='time'
        label='End time'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      {errors.time && <Error>{errors.time.message}</Error>}
      <FormField
        name='title'
        type='text'
        label='Title'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      {errors.title && <Error>{errors.title.message}</Error>}
      <FormField
        name='location'
        type='text'
        label='Location'
        register={register}
        registerOptions={{ required: 'This is required' }}
      />
      {errors.location && <Error>{errors.location.message}</Error>}
      <FormField name='teacher' type='text' label='Teacher' register={register} />
      <FormField name='prerequisites' type='text' label='Prerequisites' register={register} />
      <FormField name='description' label='Description' register={register} isTextarea={true} />
      <FormField
        name='tag'
        label='Tag'
        isSelect={true}
        options={tagsList}
        placeholder='select a tag'
        control={control}
      />
      <SubmitButton type='submit' value='Save' />
    </Form>
  );
};

EventForm.propTypes = {
  preloadedValues: PropTypes.object,
  onSubmitAction: PropTypes.func,
};

export default EventForm;
