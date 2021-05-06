import PropTypes from 'prop-types';
import Event from '../Event/Event';

const EventsList = ({ events }) => {
  const eventList = events?.map((event) => <Event key={event.id} event={event} />);

  return <ul>{eventList}</ul>;
};

export default EventsList;

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};
