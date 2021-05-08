import PropTypes from 'prop-types';

const Event = ({ event: { location, title, teacher } }) => {
  return (
    <li>
      <p>{location}</p>
      <p>{title}</p>
      <p>{teacher}</p>
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    teacher: PropTypes.string,
  }),
};

export default Event;
