import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import TagForm from '../components/TagForm/TagForm';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import { postData } from '../api/api';

const AddTag = () => {
  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  const handleAddTag = (data) =>
    getAccessTokenSilently()
      .then((token) => postData('/tags', data, token))
      .then(() => history.push('/admin/tags'));

  return (
    <AdminLayout>
      <TagForm onSubmitAction={handleAddTag} title='Add new tag' />
    </AdminLayout>
  );
};

export default AddTag;
