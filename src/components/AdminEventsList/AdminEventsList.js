import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { IoTrashBinSharp } from 'react-icons/io5';
import { IoMdCreate } from 'react-icons/io';

const Wrapper = styled.div`
  min-width: 330px;
  background: ${({ theme }) => theme.colors.white};
  padding: 20px 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.colors.darkGrey};

  h3 {
    font-weight: 400;
    margin-right: 10px;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

const IconsWrapper = styled.div`
  display: flex;
`;

const Icon = styled.span`
  margin-left: 15px;
  padding-left: 5px;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.grey};
  transition: color 0.3s ease;

  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      color: ${({ theme }) => theme.colors.darkGrey};
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  transition: background 0.3s ease;

  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

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

export default AdminEventsList;
