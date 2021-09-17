import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from '../Event/Event';

const StyledEventsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const EventsList = ({ events, tagTitle, tags }) => {
  return (
    <StyledEventsList>
      {events?.map((event) => (
        <Event key={event.id} event={event} tagTitle={tagTitle} tags={tags} />
      ))}
    </StyledEventsList>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  tagTitle: PropTypes.string,
  tags: PropTypes.PropTypes.arrayOf(PropTypes.object),
};

export default EventsList;
