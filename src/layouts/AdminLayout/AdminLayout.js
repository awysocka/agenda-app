import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import Footer from '../../components/Footer/Footer';
import { getData } from '../../api/api';
import { Wrapper, Main, DarkerLayer } from './AdminLayout.styles';

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
