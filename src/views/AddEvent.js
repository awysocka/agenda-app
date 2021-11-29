import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import EventForm from '../components/EventForm/EventForm';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import { postData } from '../api/api';

const AddEvent = () => {
  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  const handleAddPost = (data) => {
    getAccessTokenSilently()
      .then((token) => postData('/events', data, token))
      .then(() => history.push('/admin'));
  };

  return (
    <AdminLayout>
      <EventForm onSubmitAction={handleAddPost} title='Add Event' />
    </AdminLayout>
  );
};

export default AddEvent;
