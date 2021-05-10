import PropTypes from 'prop-types';

const EventsTime = ({ time }) => {
  return <p>{time}</p>;
};

EventsTime.propTypes = {
  time: PropTypes.string.isRequired,
};

export default EventsTime;
