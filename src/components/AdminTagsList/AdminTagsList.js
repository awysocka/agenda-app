import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoTrashBinSharp } from 'react-icons/io5';
import { IoMdCreate } from 'react-icons/io';
import { Wrapper, Header, ListElement, IconsWrapper, Icon, Button } from './AdminTagsList.styles';

const AdminTagsList = ({ tags, handleDelete }) => {
  const history = useHistory();

  const handleAddNewTag = () => {
    history.push('/admin/tags/new-tag');
  };

  const handleEditTag = (id) => {
    history.push(`/admin/tags/edit/${id}`);
  };

  return (
    <Wrapper>
      <Header>
        <h2>Tags List</h2>
        <Button onClick={handleAddNewTag}>Add</Button>
      </Header>
      <ul>
        {tags.length !== 0 ? (
          tags?.map((tag) => (
            <ListElement key={tag.name} tagColor={tag.color}>
              <h3>{tag.name}</h3>
              <IconsWrapper>
                <Icon>
                  <IoMdCreate onClick={() => handleEditTag(tag.id)} />
                </Icon>
                <Icon>
                  <IoTrashBinSharp onClick={() => handleDelete(tag.id)} />
                </Icon>
              </IconsWrapper>
            </ListElement>
          ))
        ) : (
          <p>No tags to show</p>
        )}
      </ul>
    </Wrapper>
  );
};

AdminTagsList.propsTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func,
};

export default AdminTagsList;
