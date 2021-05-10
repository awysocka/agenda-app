import EventsTime from '../EventsTime/EventsTime';
import EventsList from '../EventsList/EventsList';
import PropTypes from 'prop-types';

const EventsTimeGroup = ({ time, events }) => {
  return (
    <div>
      <EventsTime time={time} />
      <EventsList events={events} />
    </div>
  );
};

EventsTimeGroup.propTypes = {
  time: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsTimeGroup;
