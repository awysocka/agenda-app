import React, { useEffect, useState } from 'react';
import { getData, deleteTags } from '../api/api';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import AdminTagsList from '../components/AdminTagsList/AdminTagsList';

const TagsListView = () => {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('/tags')
      .then((data) => {
        setTags(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handleDelete = (id) => {
    deleteTags('/tags', id).then(() =>
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
