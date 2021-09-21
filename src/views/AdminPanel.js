import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm/EventForm';
import Header from '../components/Header/Header';
import { getData } from '../api/api';

const AdminPanel = () => {
  const [config, setConfig] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('/config')
      .then((data) => setConfig(data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Header title={config.title} />
          <EventForm />
        </div>
      )}
    </>
  );
};

export default AdminPanel;
