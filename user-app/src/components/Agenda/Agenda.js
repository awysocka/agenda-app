import { groupBy } from '../../helpers/groupBy';
import EventsTimeGroup from '../EventsTimeGroup/EventsTimeGroup';
import PropTypes from 'prop-types';

const Agenda = ({ events, tagTitle }) => {
  const groupedEvents = groupBy(events, 'time');

  return (
    <div>
      {Object.keys(groupedEvents).map((key) => (
        <EventsTimeGroup key={key} time={key} events={groupedEvents[key]} tagTitle={tagTitle}/>
      ))}
    </div>
  );
};

Agenda.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Agenda;
