import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExpandableElement from '../ExpandableElement/ExpandableElement';

const StyledEventElement = styled.li`
  background: ${({ theme }) => theme.colors.white};
  min-width: 220px;
  flex: 1 1 48%;
  margin: 0 5px 10px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  padding: ${(props) => (props.tagColor ? '10px 20px 10px 44px' : '10px 20px')};

  ::before {
    background: ${(props) => props.tagColor};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.darkGrey};
  line-height: 1.6;
`;

const Paragraph = styled.p`
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'capitalize')};
  font-weight: ${(props) => props.bold && '700'};
  color: ${(props) => props.light && props.theme.colors.grey};
  line-height: 1.4;
`;

const Description = styled(Paragraph)`
  margin-bottom: 20px;
`;

const DetailsLabel = styled.span`
  font-weight: 700;
`;

const DividerLine = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.lightGrey};
  margin: 10px 0 20px;
`;

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
