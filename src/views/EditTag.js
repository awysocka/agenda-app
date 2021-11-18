import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import TagForm from '../components/TagForm/TagForm';
import { updateData, getSingleData } from '../api/api';

const EditTag = () => {
  const [preloadedValues, setPreloadedValues] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSingleData('/tags', id).then((data) => setPreloadedValues(data));
  }, [id]);

  const handleUpdateTag = (data) => {
    getAccessTokenSilently()
      .then((token) => updateData('/tags', id, data, token))
      .then(() => history.push('/admin/tags'));
  };

  return (
    <AdminLayout>
      {preloadedValues ? (
        <TagForm onSubmitAction={handleUpdateTag} preloadedValues={preloadedValues} />
      ) : (
        <div>Loading...</div>
      )}
    </AdminLayout>
  );
};

export default EditTag;
