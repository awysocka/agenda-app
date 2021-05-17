import { groupBy } from '../../helpers/groupBy';
import EventsTimeGroup from '../EventsTimeGroup/EventsTimeGroup';
import PropTypes from 'prop-types';

const Agenda = ({ events, tagTitle, tags }) => {
  const groupedEvents = groupBy(events, 'time');

  return (
    <div>
      {Object.keys(groupedEvents).map((key) => (
        <EventsTimeGroup
          key={key}
          time={key}
          events={groupedEvents[key]}
          tagTitle={tagTitle}
          tags={tags}
        />
      ))}
    </div>
  );
};

Agenda.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  tagTitle: PropTypes.string,
  tags: PropTypes.PropTypes.arrayOf(PropTypes.object),
};

export default Agenda;
