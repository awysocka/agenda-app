import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm/EventForm';
import Header from '../components/Header/Header';
import AdminMenu from '../components/AdminMenu/AdminMenu';
import Footer from '../components/Footer/Footer';
import { getData } from '../api/api';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1024px;
  flex-grow: 1;
  margin: 170px auto 90px;
  padding: 0 10px;
  z-index: -1;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 36px;
  }
`;

const DarkerLayer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  transition: opacity 0.3s linear .3s;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};;
  opacity: ${({ open }) => (open ? '1' : '0')};
`;

const AdminPanel = () => {
  const [config, setConfig] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getData('/config')
      .then((data) => setConfig(data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <DarkerLayer open={open} />
          <Header title={config.title} />
          <AdminMenu open={open} setOpen={setOpen} />
          <Main>
            <EventForm />
          </Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AdminPanel;
