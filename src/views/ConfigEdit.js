import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import { getData, updateData } from '../api/api';
import ConfigForm from '../components/ConfigForm/ConfigForm';

const ConfigEdit = () => {
  const [preloadedValues, setPreloadedValues] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  useEffect(() => {
    getData('/config').then((data) => setPreloadedValues(data));
  }, []);

  const handleUpdateEvent = (data) => {
    getAccessTokenSilently()
      .then((token) => updateData('/config', '', data, token))
      .then(() => history.push('/admin/config'));
  };

  return (
    <AdminLayout>
      {preloadedValues ? (
        <ConfigForm onSubmitAction={handleUpdateEvent} preloadedValues={preloadedValues} />
      ) : (
        <div>Loading...</div>
      )}
    </AdminLayout>
  );
};

export default ConfigEdit;
