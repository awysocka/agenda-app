import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { getData } from '../../api/api';
import FormField from '../FormField/FormField';
import { Main, Form, SubmitButton, Error } from './EventForm.styles';

const EventForm = () => {
  const [tags, setTags] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', reValidateMode: 'onChange' });

  useEffect(() => {
    getData('/tags').then((data) => setTags(data));
  }, []);

  const tagsList = tags.map((tag) => {
    return { label: tag.name, value: tag.name };
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Main>
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
          type='time'
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
          register={register}
          isSelect={true}
          options={tagsList}
          placeholder='select a tag'
        />
        <SubmitButton type='submit' value='Save' />
      </Form>
    </Main>
  );
};

export default EventForm;
