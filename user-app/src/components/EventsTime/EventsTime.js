import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledEventsTime = styled.p`
  margin: 5px;
`;

const EventsTime = ({ time }) => {
  return <StyledEventsTime>{time}</StyledEventsTime>;
};

EventsTime.propTypes = {
  time: PropTypes.string.isRequired,
};

export default EventsTime;
