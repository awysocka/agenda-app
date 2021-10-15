import PropTypes from 'prop-types';
import EventsTime from '../EventsTime/EventsTime';
import AgendaEventsList from '../AgendaEventsList/AgendaEventsList';

const EventsTimeGroup = ({ time, events, tagTitle, tags }) => {
  return (
    <div>
      <EventsTime time={time} />
      <AgendaEventsList events={events} tagTitle={tagTitle} tags={tags} />
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
