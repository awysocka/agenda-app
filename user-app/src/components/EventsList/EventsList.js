import PropTypes from 'prop-types';
import Event from '../Event/Event';

const EventsList = ({ events }) => {
  return (
    <ul>
      {events?.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsList;
