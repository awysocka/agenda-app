import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoTrashBinSharp } from 'react-icons/io5';
import { IoMdCreate } from 'react-icons/io';
import { Wrapper, Header, ListElement, IconsWrapper, Icon, Button } from './AdminEventsList.styles';

const AdminEventsList = ({ events, handleDelete }) => {
  const history = useHistory();

  const handleAddNewEvent = () => {
    history.push('/admin/new-event');
  };

  const handleEditEvent = (id) => {
    history.push(`/admin/edit/${id}`);
  };

  return (
    <Wrapper>
      <Header>
        <h2>Events List</h2>
        <Button onClick={handleAddNewEvent}>Add</Button>
      </Header>
      <ul>
        {events.length !== 0 ? (
          events.map((item) => (
            <ListElement key={item.id}>
              <h3>{item.title}</h3>
              <IconsWrapper>
                <Icon onClick={() => handleEditEvent(item.id)}>
                  <IoMdCreate />
                </Icon>
                <Icon onClick={() => handleDelete(item.id)}>
                  <IoTrashBinSharp />
                </Icon>
              </IconsWrapper>
            </ListElement>
          ))
        ) : (
          <p>No events to show</p>
        )}
      </ul>
    </Wrapper>
  );
};

AdminEventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func,
};

export default AdminEventsList;
