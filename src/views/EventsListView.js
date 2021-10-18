import React, { useEffect, useState } from 'react';
import AdminEventsList from '../components/AdminEventsList/AdminEventsList';
import { getData, deleteData } from '../api/api';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

const EventsListView = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('/events')
      .then((data) => {
        setEvents(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handleDelete = (id) => {
    deleteData('/events', id).then(() =>
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
