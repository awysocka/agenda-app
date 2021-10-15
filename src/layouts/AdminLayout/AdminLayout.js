import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import Footer from '../../components/Footer/Footer';
import { getData } from '../../api/api';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  max-width: 1024px;
  margin: 170px auto 90px;
  padding: 0 10px;
  z-index: -1;
  width: 100%;
  z-index: 0;

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
  transition: opacity 0.3s linear 0.3s;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
`;

const AdminLayout = ({ children }) => {
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
          <Wrapper>
            <Header title={config.title} />
            <AdminMenu open={open} setOpen={setOpen} />
            <Main>{children}</Main>
            <Footer />
          </Wrapper>
        </>
      )}
    </>
  );
};

export default AdminLayout;
