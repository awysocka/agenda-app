import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Agenda from './components/Agenda/Agenda';
import DaySelect from './components/DaySelect/DaySelect';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TagsList from './components/TagsList/TagsList';
import { getData } from './api/api';
import { removeDuplicates } from './helpers/removeDuplicates';
import GlobalStyle from './styles/GlobalStyles';
import { theme } from './styles/theme';
import AdminPanel from './views/AdminPanel'

const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 15px 10px;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 15px 36px;
    margin-bottom: 60px;
  }
`;

const AgendaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 5px 0px;
`;

function App() {
  const [events, setEvents] = useState([]);
  const [config, setConfig] = useState({});
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState();

  useEffect(() => {
    Promise.all([
      getData('/config').then((data) => setConfig(data)),
      getData('/events').then((data) => {
        setEvents(data);
        setSelectedDay(data[0]?.date);
      }),
      getData('/tags').then((data) => setTags(data)),
    ]).then(() => setIsLoading(false));
  }, []);

  const days = removeDuplicates(events?.map((event) => event.date));

  const eventsFilteredByDay = events.filter((event) => {
    return event.date === selectedDay;
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <Header title={config.title} />
            <Main>
              <AgendaInfo>
                <DaySelect onChange={setSelectedDay} value={selectedDay} options={days} />
                <TagsList tagsTitle={config.tagsTitle} tags={tags} />
              </AgendaInfo>
              <Agenda events={eventsFilteredByDay} tagTitle={config.tagTitle} tags={tags} />
            </Main>
            <Footer />
            <AdminPanel />
          </div>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
