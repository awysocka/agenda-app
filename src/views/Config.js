import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdCreate } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { getData } from '../api/api';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

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
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Icon = styled.span`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  transition: background 0.3s ease;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media ${({ theme }) => theme.device.touchable} {
    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

const Config = () => {
  const [config, setConfig] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getData('/config')
      .then((data) => setConfig(data))
      .then(() => setIsLoading(false));
  }, []);

  const handleEditConfig = () => {
    history.push('/admin/config/edit');
  };
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AdminLayout>
          <Wrapper>
            <Header>
              <h2>Configuration</h2>
              <Button onClick={handleEditConfig}>
                <Icon>
                  <IoMdCreate />
                </Icon>
              </Button>
            </Header>
            <ul>
              <ListElement>
                <h3>Title</h3>
                <p>{config.title}</p>
              </ListElement>
              <ListElement>
                <h3>Tag title</h3>
                <p>{config.tagTitle}</p>
              </ListElement>
              <ListElement>
                <h3>Tags title</h3>
                <p>{config.tagsTitle}</p>
              </ListElement>
            </ul>
          </Wrapper>
        </AdminLayout>
      )}
    </>
  );
};

export default Config;
