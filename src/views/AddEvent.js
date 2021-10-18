import { useHistory } from 'react-router-dom';
import EventForm from '../components/EventForm/EventForm';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import { postData } from '../api/api';

const AddEvent = () => {
  const history = useHistory();

  const handleAddPost = (data) => {
    postData('/events', data).then(() => history.push('/admin'));
  };

  return (
    <AdminLayout>
      <EventForm onSubmitAction={handleAddPost} />
    </AdminLayout>
  );
};

export default AddEvent;
