import './App.css';
import React, { useState, useEffect } from 'react';
import EventList from './components/EventList/EventList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { getData } from './api';


function App() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getData('/config').then((data) => setTitle(data.title));
    getData('/events').then((data) => setEvents(data));
  }, []);

  return (
    <div className='App'>
      <Header title={title} />
      <EventList events={events} />
      <Footer />
    </div>
  );
}

export default App;
