import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import EventForm from '../components/EventForm/EventForm';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import { updateData, getSingleData } from '../api/api';

const EditEvent = () => {
  const [preloadedValues, setPreloadedValues] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSingleData('/events', id).then((data) => setPreloadedValues(data));
  }, [id]);

  const handleUpdateEvent = (data) => {
    getAccessTokenSilently()
      .then((token) => updateData('/events', id, data, token))
      .then(() => history.push('/admin'));
  };

  return (
    <AdminLayout>
      {preloadedValues ? (
        <EventForm
          onSubmitAction={handleUpdateEvent}
          preloadedValues={preloadedValues}
          title='Edit event'
        />
      ) : (
        <div>Loading...</div>
      )}
    </AdminLayout>
  );
};

export default EditEvent;
