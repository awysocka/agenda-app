import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { getData, postData } from '../../api/api';
import FormField from '../FormField/FormField';
import { Form, SubmitButton, Error } from './EventForm.styles';

const EventForm = () => {
  const [tags, setTags] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: 'onTouched', reValidateMode: 'onChange' });

  useEffect(() => {
    getData('/tags').then((data) => setTags(data));
  }, []);

  const tagsList = tags.map((tag) => {
    return { label: tag.name, value: tag.name };
  });

  const onSubmit = (data) => postData('/events', data);

  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add event</h1>
        <FormField
          name='date'
          type='date'
          label='Date'
          register={register}
          registerOptions={{ required: 'This is required' }}
        />
        {errors.date && <Error>{errors.date.message}</Error>}
        <FormField
          name='time'
          type='text'
          label='Time'
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

export default EventForm;
