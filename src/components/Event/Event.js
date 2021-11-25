import PropTypes from 'prop-types';
import ExpandableElement from '../ExpandableElement/ExpandableElement';
import {
  StyledEventElement,
  Header,
  Paragraph,
  Description,
  DetailsLabel,
  DividerLine,
} from './Event.styles';

const Event = ({
  event: { location, title, teacher, description, tag, prerequisites },
  tagTitle,
  tags,
}) => {
  const tagColor = tags.find((item) => item.name === tag)?.color;

  return (
    <StyledEventElement tagColor={tagColor}>
      <ExpandableElement
        header={
          <Header>
            <Paragraph light>{location}</Paragraph>
            <Paragraph bold uppercase>
              {title}
            </Paragraph>
            <Paragraph>{teacher}</Paragraph>
          </Header>
        }
      >
        <DividerLine />
        <Description>{description}</Description>
        {tag && (
          <Paragraph>
            <DetailsLabel>{tagTitle}: </DetailsLabel>
            {tag}
          </Paragraph>
        )}
        {prerequisites && (
          <Paragraph>
            <DetailsLabel>prerequisites: </DetailsLabel>
            {prerequisites}
          </Paragraph>
        )}
      </ExpandableElement>
    </StyledEventElement>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    teacher: PropTypes.string,
    description: PropTypes.string,
    tag: PropTypes.string,
    prerequisites: PropTypes.string,
    tagTitle: PropTypes.string,
    tags: PropTypes.PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Event;
