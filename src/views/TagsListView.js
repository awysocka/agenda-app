import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import AdminTagsList from '../components/AdminTagsList/AdminTagsList';
import { getData, deleteData } from '../api/api';

const TagsListView = () => {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getData('/tags')
      .then((data) => {
        setTags(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handleDelete = (id) => {
    getAccessTokenSilently()
      .then((token) => deleteData('/tags', id, token))
      .then(() =>
        getData('/tags').then((data) => {
          setTags(data);
        }),
      );
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AdminLayout>
          <AdminTagsList tags={tags} handleDelete={handleDelete} />
        </AdminLayout>
      )}
    </>
  );
};

export default TagsListView;
