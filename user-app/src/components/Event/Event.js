import React, { useState, useRef } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { IoChevronUpOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import './Event.css';

const Event = ({ event: { location, title, teacher, description } }) => {
  const [open, setOpen] = useState(false);
  const [eventDetailsHeight, setEventDetailsHeight] = useState('0px');

  const eventDetails = useRef(null);

  const toggleDetails = () => {
    setOpen(!open);
    setEventDetailsHeight(open ? '0px' : `${eventDetails.current.scrollHeight}px`);
  };

  return (
    <li>
      <button onClick={toggleDetails} className={`content ${open && 'open'}`}>
        <p>{location}</p>
        <p>{title}</p>
        <p>{teacher}</p>
        {open ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </button>
      <div
        ref={eventDetails}
        style={{ maxHeight: `${eventDetailsHeight}` }}
        className='event-details'
      >
        <p>{description}</p>
      </div>
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    teacher: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Event;
