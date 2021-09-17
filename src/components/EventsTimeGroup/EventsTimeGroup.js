import PropTypes from 'prop-types';

import EventsTime from '../EventsTime/EventsTime';
import EventsList from '../EventsList/EventsList';

const EventsTimeGroup = ({ time, events, tagTitle, tags }) => {
  return (
    <div>
      <EventsTime time={time} />
      <EventsList events={events} tagTitle={tagTitle} tags={tags} />
    </div>
  );
};

EventsTimeGroup.propTypes = {
  time: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  tagTitle: PropTypes.string,
  tags: PropTypes.PropTypes.arrayOf(PropTypes.object),
};

export default EventsTimeGroup;
