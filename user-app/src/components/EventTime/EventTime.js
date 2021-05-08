import PropTypes from 'prop-types';

const EventTime = ({ time }) => {
  return <p>{time}</p>;
};

EventTime.propTypes = {
  time: PropTypes.string.isRequired,
};

export default EventTime;
