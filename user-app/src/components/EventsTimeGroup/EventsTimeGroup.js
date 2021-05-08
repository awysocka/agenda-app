import EventTime from '../EventTime/EventTime';
import EventsList from '../EventsList/EventsList';
import PropTypes from 'prop-types';

const EventsTimeGroup = ({ time, events }) => {
  return (
    <div>
      <EventTime time={time} />
      <EventsList events={events} />
    </div>
  );
};

EventsTimeGroup.propTypes = {
  time: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsTimeGroup;
