import './App.css';
import React, { useState, useEffect } from 'react';
import Agenda from './components/Agenda/Agenda';
import Select from './components/Select/Select';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { getData } from './api';
import {removeDuplicates} from './helpers/removeDuplicates'

function App() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    Promise.all([
      getData('/config').then((data) => setTitle(data.title)),
      getData('/events').then((data) => {
        setEvents(data);
        setSelectedDay(data[0]?.date);
      }),
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
          <Header title={title} />
          <Select onChange={setSelectedDay} value={selectedDay} options={days} />
          <Agenda events={eventsFilteredByDay} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
