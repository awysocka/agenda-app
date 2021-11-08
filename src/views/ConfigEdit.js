import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import { getData, updateData } from '../api/api';
import ConfigForm from '../components/ConfigForm/ConfigForm';

const ConfigEdit = () => {
const [preloadedValues, setPreloadedValues] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getData('/config').then((data) => setPreloadedValues(data));
  }, []);

  const handleUpdateEvent = (data) => {
    updateData('/config', "", data).then(() => history.push('/admin/config'));
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
}
 
export default ConfigEdit;