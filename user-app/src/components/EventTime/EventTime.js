import PropTypes from 'prop-types';

const EventTime = ({ time }) => {
  return <p>{time}</p>;
};

export default EventTime;

EventTime.propTypes = {
  time: PropTypes.string.isRequired,
};
