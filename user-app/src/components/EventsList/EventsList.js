import PropTypes from 'prop-types';
import Event from '../Event/Event';

const EventsList = ({ events, tagTitle }) => {
  return (
    <ul>
      {events?.map((event) => (
        <Event key={event.id} event={event} tagTitle={tagTitle} />
      ))}
    </ul>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsList;
