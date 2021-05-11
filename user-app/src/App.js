import './App.css';
import React, { useState, useEffect } from 'react';
import Agenda from './components/Agenda/Agenda';
import Select from './components/Select/Select';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TagsList from './components/TagsList/TagsList';
import { getData } from './api/api';
import {removeDuplicates} from './helpers/removeDuplicates'

function App() {
  const [events, setEvents] = useState([]);
  const [config, setConfig] = useState({});
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    Promise.all([
      getData('/config').then((data) => setConfig(data)),
      getData('/events').then((data) => {
        setEvents(data);
        setSelectedDay(data[0]?.date);
      }),
      getData('/tags').then((data) => setTags(data))
    ]).then(() => setIsLoading(false));
  }, []);

  const days = removeDuplicates(events?.map((event) => event.date));

  const eventsFilteredByDay = events.filter((event) => {
    return event.date === selectedDay;
  });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='App'>
          <Header title={config.title} />
          <Select onChange={setSelectedDay} value={selectedDay} options={days} />
          <TagsList tagsTitle={config.tagsTitle} tags={tags}/>
          <Agenda events={eventsFilteredByDay} tagTitle={config.tagTitle} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
