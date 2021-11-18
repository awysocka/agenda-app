import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AdminEventsList from '../components/AdminEventsList/AdminEventsList';
import { getData, deleteData } from '../api/api';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

const EventsListView = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getData('/events')
      .then((data) => {
        setEvents(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handleDelete = (id) => {
    getAccessTokenSilently()
      .then((token) => deleteData('/events', id, token))
      .then(() =>
        getData('/events').then((data) => {
          setEvents(data);
        }),
      );
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AdminLayout>
          <AdminEventsList events={events} handleDelete={handleDelete} />
        </AdminLayout>
      )}
    </>
  );
};

export default EventsListView;
