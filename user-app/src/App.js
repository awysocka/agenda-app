import './App.css';
import React, { useState, useEffect } from 'react';
import Agenda from './components/Agenda/Agenda';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { getData } from './api';

function App() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getData('/config').then((data) => setTitle(data.title)),
      getData('/events').then((data) => setEvents(data)),
    ]).then(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='App'>
          <Header title={title} />
          <Agenda events={events} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
