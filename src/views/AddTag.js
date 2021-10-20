import { useHistory } from 'react-router-dom';
import TagForm from '../components/TagForm/TagForm';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import { postData } from '../api/api';

const AddTag = () => {
  const history = useHistory();

  const handleAddTag = (data) => postData('/tags', data).then(() => history.push('/admin/tags'));

  return (
    <AdminLayout>
      <TagForm onSubmitAction={handleAddTag} />
    </AdminLayout>
  );
};

export default AddTag;
