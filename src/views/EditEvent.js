import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EventForm from '../components/EventForm/EventForm';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import { updateData, getSingleData } from '../api/api';

const EditEvent = () => {
  const [preloadedValues, setPreloadedValues] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSingleData('/events', id).then((data) => setPreloadedValues(data));
  }, [id]);

  const handleUpdateEvent = (data) => {
    updateData('/events', id, data).then(() => history.push('/admin'));
  };

  return (
    <AdminLayout>
      {preloadedValues ? (
        <EventForm onSubmitAction={handleUpdateEvent} preloadedValues={preloadedValues} />
      ) : (
        <div>Loading...</div>
      )}
    </AdminLayout>
  );
};

export default EditEvent;
