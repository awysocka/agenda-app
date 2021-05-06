import PropTypes from 'prop-types';

const Event = ({ event: { localization, title, teacher } }) => {
  return (
    <li>
      <p>{localization}</p>
      <p>{title}</p>
      <p>{teacher}</p>
    </li>
  );
};

export default Event;

Event.propTypes = {
  event: PropTypes.shape({
    localization: PropTypes.string,
    title: PropTypes.string,
    teacher: PropTypes.string,
  }),
};
