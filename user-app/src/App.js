import './App.css';
import React, { useState, useEffect } from 'react';
import EventList from './components/EventList/EventList';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/events')
    .then((response) => response.json())
    .then((data) => setEvents(data)); 
}, []);

  return (
    <div className="App">
        <EventList events={events}/>
    </div>
  );
}

export default App;
