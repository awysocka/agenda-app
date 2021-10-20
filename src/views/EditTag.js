import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import TagForm from '../components/TagForm/TagForm';
import { updateData, getSingleData } from '../api/api';

const EditTag = () => {
  const [preloadedValues, setPreloadedValues] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSingleData('/tags', id).then((data) => setPreloadedValues(data));
  }, [id]);

  const handleUpdateTag = (data) => {
    updateData('/tags', id, data).then(() => history.push('/admin/tags'));
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
